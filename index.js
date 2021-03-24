/* eslint-disable indent */
require('dotenv').config()
const { Telegraf, session, Stage, BaseScene } = require('telegraf')
const TelegrafI18n = require('telegraf-i18n')
const { level, getSticker, MyContext } = require('./helpers')
const ru = require('./quiz/ru')
const en = require('./quiz/en')
const path = require('path')

const i18n = new TelegrafI18n({
  defaultLanguage: 'en',
  directory: path.resolve(__dirname, 'locales')
})

let BOT_TOKEN

if (process.env.NODE_ENV === 'production') {
  BOT_TOKEN = process.env.BOT_TOKEN
} else {
  BOT_TOKEN = process.env.BOT_TOKEN_TEST
}
const bot = new Telegraf(BOT_TOKEN, { contextType: MyContext })

bot.use(i18n.middleware())

const jsRoom = new BaseScene('js-room')

let getQuiz = ctx => (ctx.i18n.locale() === 'en' ? en : ru)

let questions

jsRoom.enter(ctx => {
  questions = getQuiz(ctx)
  const questionIndex = 0
  const counter = 0
  ctx.session.counter = counter
  ctx.session.questionIndex = questionIndex

  const { title, random, correct_option_id } = questions[questionIndex]

  ctx.replyWithQuiz(`${ctx.i18n.t('Question')}: 1 ${ctx.i18n.t('from')} ${questions.length}\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
  // ctx.telegram.sendMessage(`${ctx.i18n.t('course')}: www.jscamp.app`)
})

jsRoom.on('poll_answer', ctx => {
  const questionIndex = ++ctx.session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === ctx.pollAnswer.option_ids[0]
  result && ++ctx.session.counter

  if (questionIndex !== questions.length) {
    const { title, random, correct_option_id } = questions[questionIndex]
    ctx.replyWithQuiz(
      `${ctx.i18n.t('Question')}: ${questionIndex + 1} ${ctx.i18n.t('from')} ${questions.length}\n${title}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    ctx.reply(
      `Ваш счет: ${ctx.session.counter}. Уровень: ${level(ctx.session.counter)} ${getSticker(ctx.session.counter)}`
    )
    // ctx.telegram.sendMessage(`${ctx.i18n.t('course')}: www.jscamp.app`)
  }

  ctx.scene.current.leave()
})

const stage = new Stage([jsRoom])
bot.context.questions = questions

bot.use(session())

bot.use((ctx, next) => {
  return next()
})
bot.use(stage.middleware())
bot.command('start', ctx => ctx.scene.enter('js-room'))
bot.launch()

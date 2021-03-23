/* eslint-disable */
const functions = require('firebase-functions')
const { Telegraf, session, Stage, BaseScene } = require('telegraf')
const TelegrafI18n = require('telegraf-i18n')
const path = require('path')
const { level, getSticker, MyContext } = require('./helpers')
const questions = require('./questionsRu')
let config = require('./env.json')

if (Object.keys(functions.config()).length) {
  // eslint-disable-next-line no-unused-vars
  config = functions.config()
}

const bot = new Telegraf(config.service.telegram_key, { contextType: MyContext })

const i18n = new TelegrafI18n({
  defaultLanguage: 'en',
  allowMissing: false, // Default true
  directory: path.resolve(__dirname, 'locales')
})

bot.use(i18n.middleware())

const jsRoom = new BaseScene('js-room')

jsRoom.enter(ctx => {
  const questionIndex = 0
  const counter = 0
  ctx.session.counter = counter
  ctx.session.questionIndex = questionIndex

  const { title, random, correct_option_id } = questions[questionIndex]

  ctx.replyWithQuiz(`Вопрос: 1 из ${questions.length}\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})

jsRoom.on('poll_answer', ctx => {
  const questionIndex = ++ctx.session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === ctx.pollAnswer.option_ids[0]
  result && ++ctx.session.counter

  if (questionIndex !== questions.length) {
    const { title, random, correct_option_id } = questions[questionIndex]
    return ctx.replyWithQuiz(`Вопрос: ${questionIndex + 1} из ${questions.length}\n${title}`, random, {
      correct_option_id,
      is_anonymous: false
    })
  } else {
    ctx.reply(
      `Ваш счет: ${ctx.session.counter}. Уровень: ${level(ctx.session.counter)} ${getSticker(ctx.session.counter)}`
    )
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
// bot.launch()

exports.echoBot = functions.https.onRequest(async (request, response) => {
  functions.logger.log('Incoming message', { body: request.body })
  await bot.handleUpdate(request.body, response)
  return response.sendStatus(200)
})

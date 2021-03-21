/* eslint-disable indent */
const functions = require('firebase-functions')
const { Telegraf } = require('telegraf')
const { level, getSticker } = require('./helpers')
const questions = require('./questions')

const session = require('telegraf/session')

let config = require('./env.json')

if (Object.keys(functions.config()).length) {
  // eslint-disable-next-line no-unused-vars
  config = functions.config()
}

const bot = new Telegraf(config.service.telegram_key)

bot.use(
  session({
    getSessionKey: ctx => {
      if (ctx.from) {
        return `${ctx.from.id}`
      } else if (ctx.pollAnswer && ctx.pollAnswer.user) {
        return `${ctx.pollAnswer.user.id}`
      }
      return null
    }
  })
)

bot.start(ctx => {
  const questionIndex = 0
  const counter = 0
  ctx.session.counter = counter
  ctx.session.questionIndex = questionIndex

  const { title, random, correct_option_id } = questions[questionIndex]
  return ctx.replyWithQuiz(`Вопрос: ${questionIndex + 1} из ${questions.length}\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})

bot.on('poll_answer', ctx => {
  const questionIndex = ++ctx.session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === ctx.pollAnswer.option_ids[0]
  result && ++ctx.session.counter

  const userId = ctx.pollAnswer.user.id

  if (questionIndex === questions.length) {
    return ctx.telegram.sendMessage(
      userId,
      `Ваш счет: ${ctx.session.counter}. Уровень: ${level(ctx.session.counter)} ${getSticker(ctx.session.counter)}`
    )
  }

  const { title, random, correct_option_id } = questions[questionIndex]
  return ctx.telegram.sendQuiz(userId, `Вопрос: ${questionIndex + 1} из ${questions.length}\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})

bot.launch()

// eslint-disable-next-line no-console
bot.catch(err => console.error(err))

exports.helloWorld = functions.https.onRequest((request, response) => {
  bot.catch(err => functions.logger.info(`Error: ${err}`, { structuredData: true }))

  response.send('JavaScriptBot by https://www.jscamp.app')
})

// const scene2 = new WizardScene('scene2', ctx => {
//   ctx.reply(`${getSticker(ctx.session.counter)}`)
//   ctx.reply(`Ваш счет: ${ctx.session.counter}. Уровень: ${level(ctx.session.counter)}`)
// })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

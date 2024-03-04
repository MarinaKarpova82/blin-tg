const TelegramBot = require('node-telegram-bot-api');

const token = '6851094854:AAH-RQGvVpHUgm6ugAA3COR_Wi-DBLTjjfk';

const bot = new TelegramBot(token, {polling: true});
const webAppUrl = 'http://localhost:4200/'

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start') {
    await bot.sendMessage(chatId, 'кнопка', {
        reply_markup: {
          keyboard: [[{ text: "тык" }]]
        }
      });
    }
});
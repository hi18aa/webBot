const { tgToken, tgToken2, httpPort } = require('./config/setting');
const express = require('express');
const TgBot = require('./lib/telegramBot');

const recordBot = new TgBot(tgToken2);
const app = express();

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(httpPort, () => {
    console.log(`Server is listening at http://localhost:${httpPort}`);
});


/*-------------------------------
機器人
-------------------------------*/
recordBot.on('message', async (msg) => {
    try {
        const { message_id, from, chat, date, text, document } = msg;
        console.log(msg);

    } catch (err) {
        console.error('err', err);
    }
});

recordBot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: {
                            url: 'https://hi18aa.github.io/webBot/'
                        }
                    }
                ]
            ]
        }
    }

    recordBot.bot.sendMessage(chatId, 'Click the button below to open the Web App:', options);
});

recordBot.startBot();

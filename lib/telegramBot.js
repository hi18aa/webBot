const TelegramBot = require('node-telegram-bot-api');

class TgBot {
    constructor(token) {
        this.isConnection = false;
        this.token = token;
        this.bot = false;
        this.events = [];
        this.textEvents = [];
    }
    startBot(func) {
        if (this.isConnection) return;
        this.isConnection = true;
        this.bot = new TelegramBot(this.token, { polling: true });
        this.events.forEach(eventsValue => this.bot.on(...eventsValue));
        this.textEvents.forEach(eventsValue => this.bot.onText(...eventsValue));
        if(typeof func === 'function') func(this.bot);
        console.log('Bot 已經啟動');
    }
    stopBot() {
        if (!this.isConnection) return;
        this.isConnection = false;
        this.bot.stopPolling();
        this.bot = false;
        console.log('Bot 已經停止');
    }
    on(eventName, eventFunc) {
        this.events.push([eventName, eventFunc]);
    }
    onText(eventName, eventFunc) {
        this.textEvents.push([eventName, eventFunc]);
    }
}

module.exports = TgBot;
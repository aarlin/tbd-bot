const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const html2image = require('./html2image');
const yahooStocks = require('./yahoo-stocks');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async(msg) => {
    const tickerMatch = msg.content.match(/(\$[a-zA-Z.]+)/)
    console.log(tickerMatch)
    if (tickerMatch.length > 0) {
        await html2image(msg, 'elon');
        await yahooStocks('TSLA');
        // let editedText = msg.toString().replace(/\$[a-zA-Z.]+/, "**\$1**")
        // msg.edit(editedText)
        // you can do whatever you want with the msg variable; it returns the normal message object.
        msg.react("👋")
        // message.channel.send(tickerMatch[0]);
    }
});

client.login(process.env.DISCORD_TOKEN);
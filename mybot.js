const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot by MrScopes - Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '') {
    msg.delete;
    msg.('Deleted the last 10 messages...');
  }
});

client.login('hidden');

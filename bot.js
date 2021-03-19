const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const{ prefix, token } = require('./config.json');


console.log('Starting The Bot of Avon...');
client.login(token);
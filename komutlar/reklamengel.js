const discord = require('discord.js')
var db = require('quick.db');
exports.run = (client, message, args) => {
   if (args[0] == "open") {
message.reply('Adblock is opened.')
db.set(`reklamengel_${message.guild.id}`, `açık`)
   }
   if (args[0] == "close") {
    message.reply('Adblock is closed.')
    db.set(`reklamengel_${message.guild.id}`, `kapalı`)
       }
    },
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['adblock', 'ab'],
  permLevel: 0
};
 
exports.help = {
  name: 'reklamengel'
};
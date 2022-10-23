const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const fs = require('fs');
const db = require("quick.db")
exports.run = async (bot , message, args) => {

  let reason = args.slice(0).join(' ') 
  if(!reason) return message.reply("Neden AFK Olduğunuzu Yazınız.")
      setTimeout(function(){

  db.set(`afk_${message.author.id}, ${message.guild.id}`, reason)
  
  db.set(`afk-zaman_${message.author.id}, ${message.guild.id}`, Date.now())
      },500)
const botclub = new Discord.RichEmbed()
.setTitle("<a:basarili:749532011483627541> Başarılı!")
.setDescription("AFK Moduna Giriş Yapıldı.")
.addField("Afk Nedeni;",`${reason}`)
.setColor("GREEN")
.setThumbnail(message.author.avatarURL)
.setTimestamp()
.setFooter(message.guild.name, message.guild.iconURL)
  message.channel.send(botclub)
  if(!message.member.nickname) return message.member.setNickname("[AFK] " + message.member.user.username)
  message.member.setNickname("[AFK] " + message.member.nickname).catch(err => console.log(err));
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Afk Olursunuz.',
  usage: '<prefix>afk'
};
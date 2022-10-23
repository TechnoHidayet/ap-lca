const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (args, message, client) => {
    if (message.author.id !== '1010905951571804211')
        return message.channel.send(
            new Discord.MessageEmbed().setColor(`RED`).setDescription(`\`${message.author.tag}\`, :x: **Bu Komutu Çalıştırmak İçin Botun __Geliştiricisi__ Olmanız Lazım!**`)).then(msg => msg.delete({timeout: 5000}));
    message.delete()
    message.reply(`**Bot Yeniden Başlatılıyor...**`).then(msg => {
        console.log(`[BOT] Yeniden Başlatıldı.`);
        process.exit(0);
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'reboot', 'yeniden-başlat', 'yenile' ],
    permLevel: 0
};
exports.help = {
    name: "başlat",
    description: "Botu yeniden başlatır.",
    usage: "!reboot"
};
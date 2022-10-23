const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767});
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
const util = require("./util/Util.js")
const th = require("technohidayet.js")
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

util.Start(client)
require("./util/eventLoader")(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Adet Komut Yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
let deneme = `${props.conf.aliases}`
let deneme2 = deneme.replace(",",", " + ayarlar.prefix)
    log(`${ayarlar.prefix}${props.help.name}, ${ayarlar.prefix}${deneme2}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
// Star Coders kanalına abone olmayı unutmayın.

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
// Star Coders kanalına abone olmayı unutmayın.

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("dnd");
  client.user.setActivity('Yapımcı Eren Kanks');
})

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on("warn", e => {
  console.log(e.replace(regToken, "that was redacted"));
});
client.on("error", e => {
  console.log(e.replace(regToken, "that was redacted"));
const client = new Discord.Client();
});

client.login(process.env.token).catch(err => {
if(!process.env.token){
console.log("Lütfen bir token gir")
process.exit(0)
} else if(err.toString().includes("TOKEN_INVALID")){
console.log("Lütfen düzgün bir token gir")
process.exit(0)
} else if(err.toString().includes("DISALLOWED_INTENTS")){
console.log("Lütfen tokenini girdiğin botun intentlerini aç (tek yapman gereken https://discord.com/developers/applications sayfasına girip bot kısmına girip alta inip tüm gri yerleri açıp mavi yap.)")
process.exit(0)
}
console.error(err)
process.exit(0)
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.on("message", async msg => {
  const i = await db.fetch(`${msg.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.permissions.has("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply("Heey! Küfür Yasak.")
            .then(wiskyx => wiskyx.delete({ timeout: 5000 }));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", async msg => {
  const i = db.fetch(`${msg.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.permissions.has("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply("Yakaladım Seni! Küfür Yasak.")
            .then(wiskyx => wiskyx.delete({ timeout: 5000 }));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
client.on('message', msg => {
    if (db.get(`reklamengel_${msg.guild.id}`) === 'kapalı') return;
    if (db.get(`reklamengel_${msg.guild.id}`) === 'açık') {
        var reklamlar = new RegExp(/(discord.gg|http|.gg|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/)
        if (reklamlar.test(msg.content)== true) {
             {
              msg.delete()
                var e = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setAuthor("Ad Block!")
                .setDescription(`You can't adversiting in this server!`)
                msg.reply(e) 
            }
        }
            
    }
  });
module.exports = async message => {
  let client = message.client;
  let prefix = ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) { 
let dcsa = await db.fetch(`SC`,'aktif')
if(dcsa) {
 
  if(message.author.id !== "Idni Yaz")  {
 
 let dcs = new Discord.RichEmbed()
 .setTitle('Bakımda SC')
 .setDescription(`\`Bot Bakımda SC/ Sracos Code   `) // \`
 .setColor('RANDOM') // \`
message.channel.send(dcs).then(dcs1 => dcs1.delete(5000))
 return
 } 
  
}

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
}
client.on('message', message => {
  let sistem = db.fetch(`saas_${message.guild.id}`)

  var sa = ["Sa","SA","sa","Sea","sea","SEA","selamın aleyküm","Selamın Aleyküm","SELAMIN ALEYKÜm","selamun aleyküm","Selamun Aleyküm","SELAMUN ALEYKÜM"]

  if(sistem === 'acik'){
    if(sa.includes(message.content.toLowerCase())){
      message.channel.send(` **Aleyküm Selam , Hoşgeldin.**`)
    }
  } else {
    return;
  }
})

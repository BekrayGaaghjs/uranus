const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("Anti-raid zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Anti-raid sistemi başarıyla açıldı");
  }
 
  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "Anti-raid açılmamış. Açmak için **!anti-raid aç**"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Anti-raid sistemi başarıyla kapatıldı");
  }
  if (!args[0])
    return message.reply(
      "**Yetkili Ekip İlgileniyor!** <@&787242203859648533> <@&787242203859648532> <@&787242203856109587> <@&787242203856109586> <@&787242203859648534>"
    );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['antiraid'],
  permLevel: 0
};
exports.help = {
  name: "destek"
};
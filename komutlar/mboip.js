const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()
.setAuthor(`MBORP`, client.user.avatarURL())
.setColor('GREEN')
.setDescription(`**:diamond_shape_with_a_dot_inside: **MBO RolePlay** :diamond_shape_with_a_dot_inside:\n :mega:**Sunucu İp!!**:mega:\n :diamonds:**Server İP** |:pushpin: **connect 176.98.41.130**:diamonds:\n :diamonds:**TeamSpeak **|:pushpin:  **MBORP :diamonds:\n @everyone`)  
  .setImage(`https://cdn.discordapp.com/attachments/777256583281115146/788097550807859261/anigif.gif`)
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'ip',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
//DÜZENLENECEK
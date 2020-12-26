const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()
.setAuthor(`MBORP`, client.user.avatarURL())
.setColor('GREEN')
.setDescription(`**:point_down:|--:diamond_shape_with_a_dot_inside: **MBO RolePlay Bakımdadır**:diamond_shape_with_a_dot_inside:--|:point_down_tone2:\n :pray: **Sunucumuz şuanda bakıma alınmış verdiğimiz rahatsızlık yüzünden özür dileriz** :pray:\n -----------------------------------------------------------\n :pencil: Aktif Olunca Burdan Haberdar Olabilirsiniz :pencil:\n @everyone`)  
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
	name : 'bakımda',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
//DÜZENLENECEK
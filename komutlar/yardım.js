const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`neonlight`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=547840645750849536&scope=bot&permissions=8)  \n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail("https://cdn.discordapp.com/attachments/544571308348801028/547843157576908812/tumblr_mt6a1uCqOD1ripvjio7_500.gif")
      .addField(`➽ neonlight - Yardım Menüsü`, `▫ | **>anakomutlar**: Sunucunuz için Ayar Komutlarını Gösterir.\n▫ | **>eğlence**: Eğlenmek için bulunan komutlar.\n▫ | **>yetkili**: Sunucuyu yönetmek için gerekli olan komutlar.\n▫ | **>kullanıcı**: Kullanıcılar için komutlar.\n▫ | **>oyun**: Oyun Komutları. `)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);
 

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };

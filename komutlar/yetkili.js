const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("** ⚠ Sunucu Yetkilisi Komutları ⚠ **", `>ban = İstediğiniz Kişiyi Sunucudan Banlar. \n>kick  = İstediğiniz Kişiyi Sunucudan Atar. \>unban = İstediğiniz Kişinin Yasağını Açar. \n>sustur = İstediğiniz Kişiyi Susturur.`)
    message.channel.send(embedyardim);
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilik'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Sunucu Yetkilisi Komutlarını Gösterir',
  usage: 'yetkili [komut]'
};
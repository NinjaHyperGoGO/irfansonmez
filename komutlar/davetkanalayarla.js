const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{


   let logkanali = message.mentions.channels.first();
   if (!logkanali) message.channel.send('**Bir Log Kanalı Belirlemelisin** <a:hata:533648043426316288>')

   db.set(`davetk_${message.guild.id}`, message.mentions.channels.first().id).then(i => {

    message.channel.send(`**kanalı Başarıyla <#${i}> olarak ayarlandı.** <a:onay:528885493207793665>`)    
   })
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['davet-kanal-ayarla'],
 permLevel: 0
};

exports.help = {
 name: 'davet-kanalı-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};





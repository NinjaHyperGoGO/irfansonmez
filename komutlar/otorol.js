const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
exports.run = async (bot, message, args) =>
{
  	let profil = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("Ayarlamam İçin Bir Rol Etiketlemelisin. <a:hata:533648043426316288> \nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \nÖrnek Kullanım : >otorol @rol #kanal **");
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("**Doğru Kullanım = /otorol @<roladı> #<metinkanalı> <a:onay:528885493207793665>**".then(msg => msg.delete(5000)));
      
	if(!profil[message.guild.id]){
    
		profil[message.guild.id] = {
      
			sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}
	
	profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
	
	fs.writeFile("./otorol.json", JSON.stringify(profil), (err) => {
		console.log(err)
	})
	const embed = new Discord.RichEmbed()
		.setDescription(` Otorol başarıyla ${args[0]} olarak ayarlandı! <a:onay:528885493207793665> \nOtorol Mesaj kanalı başarıyla ${mentionedChannel} olarak ayarlandı <a:onay:528885493207793665>`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}
}
exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}
exports.help =
{
  name: 'otorol',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorol'
}
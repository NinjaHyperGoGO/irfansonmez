const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')

exports.run = async (client, message, args) => {
	if(!args[0]) {
		const embed = new Discord.RichEmbed()
						.setDescription(` Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın :shrug:
                        Örnek Kullanım : 
                        >sayaç <Sayı> #kanal `)
			.setColor("RED")
			.setTimestamp()
		message.channel.send({embed})
		return
  }
  
	let profil = JSON.parse(fs.readFileSync("sayac.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  const s1 = new Discord.RichEmbed()
			.setDescription(` Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın <a:hata:531015060047396875>
                        Örnek Kullanım : 
                        s!sayaç <Sayı> #kanal `)
  .setColor("RED")
			.setTimestamp()
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(s1);


	if(args[0] === "sıfırla") {
		if(!profil[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Ayarlanmayan şeyi sıfırlayamazsın!`)
				.setColor("RANDOM")
				.setTimestamp()
			message.channel.send({embed})
			return
		}
		delete profil[message.guild.id]
		fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`Sayaç başarıyla sıfırlandı!`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(isNaN(args[0])) {
		const embed = new Discord.RichEmbed()
			.setDescription(` Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın :shrug:
                        Örnek Kullanım : 
                        >sayaç <Sayı> #kanal `)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(args[0] <= message.guild.memberCount) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Belirttiğin Sayı Çok Küçük [${message.guild.memberCount}]  Veya O Sayıya Zaten Ulaşmışsın :shrug:`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(!profil[message.guild.id]){
		profil[message.guild.id] = {
			sayi: args[0],
      kanal: mentionedChannel.id
		};
	}
	
	profil[message.guild.id].sayi = args[0]
  profil[message.guild.id].kanal = mentionedChannel.id
	
	fs.writeFile("sayac.json", JSON.stringify(profil), (err) => {
		console.log(err)
	})

	const embed = new Discord.RichEmbed()
		.setDescription(`---------Sayaç--------- 
                     ¦> <a:onay:528885493207793665>   Sayaç Aktif Edildi 
                     ¦> <a:onay:528885493207793665>   \`${args[0]}\` Olarak Güncelledim!  
                     ¦> <a:onay:528885493207793665>   Sayaç ${mentionedChannel} Olarak Güncelledim! 
                     L--------------------`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sayacayarla', 'sayac', 'sayaç'],
	permLevel: 2
}

exports.help = {
	name: 'sayaç',
	description: 'Sayacı ayarlar.',
	usage: 'sayaç [sayı/sıfırla] [kanal]'
}
const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
     "💯 | Türk Yapımı Eğlence Botu !",
     "⚠ | -sunucu-kur İle Profesyonel Bir Discord Sunucusu Kur !",
     "🔰 | -resimlihoşgeldin Sunucuya Girip Çıkanlardan Haberdar Olun",
     "💳 | -canlıdestek Ile Destek Alın",
     "💲 | -döviz Döviz Fiyatı",
     "📗 | -yardım Komutları Atar !",
     "😊 | -davet Beni Sunucuna Davet Et !",
     "🎼 | -oynat Müzik Çalar",     
     "🍕 | -sayaç Komutu Aktif",
     "🕛 | -otorol Komutu Ile Sunucuya Gelenlere Otomatik Rol Verin",
     "⚠ | Anti Spam Koruması Gelmiştir Artık Sunucularınız Güvende !",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+5)+5);

        client.user.setGame(oyun[random], "https://www.twitch.tv/hazretioops");
        }, 5 * 700);
}

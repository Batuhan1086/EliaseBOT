const Discord = require("discord.js");
exports.run = (client, msg, args) => {
if (msg.channel.type !== "text") return;
if (!msg.channel.permissionsFor(msg.member).has("MANAGE_GUILD")) return msg.channel.send("Bu komutu sadece `MANAGE_GUILD` yetkisine sahip olanlar kullanabilir.");
const limit = args[0] ? args[0] : 0;
if (limit > 120) return msg.channel.send("Süre limiti maksimum 120 saniye olabilir.");
var request = require('request');
request({
    url: `https://discordapp.com/api/v6/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
});

if (limit == 0) return msg.channel.send("Yavaş mod kaldırıldı :ok_hand: \nTekrar açabilmek için /slowmode **<kaç saniye aralıkla yazılsın>**");
return msg.channel.send(`Üyeler bundan sonra **${limit}** saniye aralıklarla mesaj gönderebilecek.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slowmode" ,"yavaş mod"],
  permLevel: 0
};

exports.help = {
  name: 'yavaşmod',
  description: 'İstediğiniz Kişiye sarılırsınız.',
  usage: 'sarıl'
};
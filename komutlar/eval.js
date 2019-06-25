const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
	if (message.author.id === "267604752764764160") {
		try {
		  var code = args.join(" ");
		  var evaled = eval(code);

		  if (typeof evaled !== "string")
			evaled = require("util").inspect(evaled);

		  message.channel.send("xl", clean(evaled), {code:true});
		} catch (err) {
		  message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
		function clean(text) {
		  if (typeof(text) === "string")
			return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		  else
			  return text;
		}
	} else {
		message.reply('Bu komutu kullanmak için gerekli izine sahip değilsin. (Batuhan Gürkan)')
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};

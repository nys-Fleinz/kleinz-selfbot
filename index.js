const { Client, Collection } = require("discord.js-selfbot-v13");
const config = require("./settings/config.json")
const client = new Client({checkUpdate: false, patchVoice: true});
const colors = require("colors")

client.commands = new Collection();

["CommandUtil", "EventUtil"].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });

process.on('exit', code => { console.log(`Le processus s'est arrêté avec le code: ${code}!`) });
process.on('uncaughtException', (err, origin) => { console.log(`UNCAUGHT EXCEPTION: ${err}, 'Origine: ${origin}`.red) });
process.on('unhandledRejection', (reason, promise) => { console.log(`UNHANDLED REJECTION: ${reason}\n\n`.red, promise) });
process.on('warning', (...args) => console.log(...args));

// LOGIN
console.log("Loging into account...".green);
client.login(config.account.TOKEN);
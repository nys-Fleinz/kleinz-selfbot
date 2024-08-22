const { RichPresence } = require("discord.js-selfbot-v13");
const { randomUUID } = require('node:crypto');

module.exports = {
    name: "playing",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "presence",
    usage: "playing [game]",
    examples : ["playing Team Fortress 2"],
    description: "Set your current activity to a playing acitvity.",
    run: async (client, message, args, X, info, success) => {
        const kleinzRcp = new RichPresence()
            .setApplicationId('817229550684471297')
            .setType('PLAYING')
            .setName(`${args.join(" ")}`)
        client.user.setActivity(kleinzRcp);
    }
}
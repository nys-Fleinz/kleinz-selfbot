const Discord = require("discord.js-selfbot-v13");

module.exports = {
    name: "presenceinfo",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "presence",
    usage: "presenceinfo <user>",
    examples: ["presenceinfo @Kleinz"],
    description: "Get informations about a presence.",
    run: async (client, message, args) => {
        await message.delete();
        const user = message.author;
        const member = message.guild.members.cache.get(user.id);
        
        if (member) {
            const presence = await member.user.presenceFetch()
            console.log(presence);
        }
    },
};

const { joinVoiceChannel } = require("@discordjs/voice");
const { MessageFlags } = require("discord.js-selfbot-v13");
module.exports = {
    name: "call",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "voice",
    usage: "call @user",
    examples : ["call", "call @Kleinz"],
    description: "Start a call",
    run: async (client, message, args, kleinz) => {
        message.delete()
        let cId = "";
        if(message.guildId === null) {
            cId = message.channelId
        } else {
            const user = message.mentions.users.first();
            await user.createDM().then(dmc => {
                cId = dmc.id;
            });
        }
        const dmChannel = client.channels.cache.get(cId);
        
        try { let connection = await dmChannel.call(); } catch (error) {
            console.log(error)
            return console.log(kleinz.console.info, "Mention the user you want to call.".yellow)
        }
        console.clear()
        console.log(kleinz.console.success, `Calling https://discord.com/channels/@me/${cId}`.green)

    }
}
module.exports = {
    name: "join",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "raid",
    usage: "join [server invite]",
    examples : ["join discord.gg/kleinz", "join kleinz"],
    description: "Try to join a server while bypassing verification check.",
    run: async (client, message, args) => {
        message.delete()
        const code = args[0]
        await client.fetchInvite(code).then(async invite => {
            await invite.acceptInvite();
            console.log(invite.guild.name)
            
          });
    }
}
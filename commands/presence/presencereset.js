module.exports = {
    name: "presencereset",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "presence",
    usage: "presencereset",
    examples: ["presencereset"],
    description: "Reset your presence. It takes a short moment.",
    run: async (client, message, args, kleinz) => {
        await message.delete();
        client.user.setActivity(null)
        console.log(kleinz.console.success, "Presence has been clear.".green)
    },
};
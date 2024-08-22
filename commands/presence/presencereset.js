module.exports = {
    name: "presencereset",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "presence",
    usage: "presencereset",
    examples: ["presencereset"],
    description: "Reset your presence. It takes a short moment.",
    run: async (client, message, args, X, info, success) => {
        await message.delete();
        client.user.setActivity(null)
        console.log(success, "Presence has been clear.".green)
    },
};
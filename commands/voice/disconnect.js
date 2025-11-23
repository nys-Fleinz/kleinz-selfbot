module.exports = {
    name: "dc",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "voice",
    usage: "dc",
    examples : ["dc"],
    description: "Disconnect from vocal channel",
    run: async (client, message) => {
        message.delete()
        const me = message.author;
        await me.voice.disconnect();
    }
}
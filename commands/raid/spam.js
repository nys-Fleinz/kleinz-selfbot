module.exports = {
    name: "spam",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "raid",
    usage: "spam [number] [message]",
    examples : ["spam 15 Kleinz IS CoOl"],
    description: "Spam a certain amount of message.",
    run: async (client, message, args) => {
        message.delete()
        let number = args[0]
        const content = args.slice(1).join(" ");
        if (!number || isNaN(number) || number == undefined) return console.log("You need to give a number of messages to send.");
        if (!content || content == undefined) return console.log("You need to give a message to spam.");
        function spamMessage() {
            message.channel.send(content);
        }
        for (let i = 0; i < number; i++) {
            spamMessage();
        }
    }
};
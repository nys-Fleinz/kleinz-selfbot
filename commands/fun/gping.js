module.exports = {
    name: "gping",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "fun",
    usage: "gping <amount> [mention/id]",
    examples: ["gping 15 @Kleinz"],
    description: "Pong :D",
    run: async (client, message, args, kleinz) => {
        message.delete();

        let mentionString = '';
        if (!message.mentions.users.first() && !args[1]) {
            return console.log("You didn't mention a user or provide a valid user ID.");
        } else if (message.mentions.users.first()) {
            const mention = message.mentions.users.first();
            mentionString = `<@${mention.id}>`;
        } else {
            try {
                const user = await client.users.fetch(args[1]);
                mentionString = `<@${user.id}>`;
            } catch (error) {
                return console.log("You didn't mention a user or provide a valid user ID.");
            }
        }

        if (isNaN(args[0])) {
            return console.log("No valid number was given. Ex: gping 15 @Kleinz");
        }
        if (args[0] <= 0) {
            return console.log("Please provide a number above 0");
        }
        const number = parseInt(args[0]);

        async function spam(number, mentionString) {
            for (let i = 0; i < number; i++) {
                await message.channel.send(mentionString).then(e => e.delete());
            }
        }

        spam(number, mentionString);
    }
};
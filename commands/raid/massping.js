module.exports = {
    name: "massping",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: false,
    category: "raid",
    usage: "massping",
    examples : ["massping"],
    description: "Pong :D",
    run: async (client, message, args, kleinz) => {
        const guild = message.guild;
        const users = await guild.members.fetch();
        const userArray = Array.from(users.values());

        let mentionCount = 0;
        let numberOfBots = 0;
        var mentionMessage = []


        for (let i = 0; i < userArray.length; i++) {
            const user = userArray[i].user;
            if (user.bot == false) {
                mentionMessage.push(`<@${user.id}>`)
                mentionCount++;
                console.log(mentionMessage);
                console.log(`mention count ${mentionCount}\nuserArray ${userArray.length}`)
            } else {
                numberOfBots++
            }
            if (mentionMessage.length == 95 || mentionCount == userArray.length-numberOfBots) {
                message.channel.send(mentionMessage.join(""))
                console.log(kleinz.console.success, "message sent!".green)
                mentionCount = 0;
                mentionMessage = []
            }
        }

        console.log("Bots not mentionned:".blue,parseFloat(numberOfBots),"\nMembers mentionned:".blue, parseFloat(userArray.length-numberOfBots))
    }
}
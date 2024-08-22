module.exports = {
    name: "fping",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "fun",
    usage: "fping [@mention] <message>",
    examples : ["fping @Kleinz xdd haii :D"],
    description: "Send message with hidden mention in it.",
    run: (client, message, args, X, info, success) => {
        const mention = message.mentions.users.first()
        let messageFinal = args.filter(function (e) {
            return e !== mention;
        });
        if(message.content.match(/[a-zA-Z]/g).length+1002 > 2000) {
            console.log("Your message was containing more than 2000 characters when edited.\nWhen edited, 1002 characters are added to perform exploit.")
            return message.delete()
        } else {
            try {
                message.edit(`${messageFinal.join(" ")} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| ${mention}`)
            } catch(error) {
                message.delete()
                console.log(`Error while editing message.`)
            } 
        }
        
    }
}
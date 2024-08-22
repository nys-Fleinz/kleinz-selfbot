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
        if (mention == undefined) { message.delete(); return console.log(X, "Please mention someone to fake ping.".red) }
        args.shift()
        args = args.join(" ")


        if(args.match(/[a-zA-Z0-9]/g).length+1002 > 2000) {
            console.log("Your message was containing more than 2000 characters when edited.\nWhen edited, 1002 characters are added to perform exploit.")
            return message.delete()
        } else {
            try {
                message.edit(`${args} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| ${mention}`)
                console.log(`${success} Secrete ping sent with message: ${args}`)
            } catch(error) {
                message.delete()
                console.log(`Error while editing message.`)
            } 
        }
        
    }
}
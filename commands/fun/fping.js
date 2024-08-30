module.exports = {
    name: "fping",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "fun",
    usage: "fping [@mention] <message>",
    examples : ["fping @Kleinz xdd haii :D"],
    description: "Send message with hidden mention in it.",
    run: (client, message, args, kleinz) => {
        const mention = message.mentions.users.first()
        if (!mention || mention == undefined) { message.delete(); return console.log(kleinz.console.X, "Please mention someone to fake ping.".red) }
        args.shift()
        args = args.join(" ")


        if(args.match(/[a-zA-Z0-9]/g).length+1002 > 2000) {
            console.log(kleinz.console.info, "Your message was containing more than 2000 characters when edited.\nWhen edited, 1002 characters are added to perform exploit.".yellow)
            return message.delete()
        } else {
            try {
                message.edit(`${args} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| ${mention}`)
                console.log(`${kleinz.console.success} ${"Secrete ping sent with message:".blue} ${args.green}`)
            } catch(error) {
                message.delete()
                console.log(`${kleinz.console.X} Error while editing message.`)
            } 
        }
        
    }
}
const { account } = require('../../settings/config.json')
const colors = require("colors")

var X = "[".magenta+"X".red+"]".magenta
var info = "[".magenta+"!".blue+"]".magenta
var success = "[".magenta+">".green+"]".magenta

module.exports = {
    name: "messageCreate",
    once: false,
    execute(client, message) {
        if (message.author.id != client.user.id) return;
        if (message.content.startsWith(account.prefix) == false) return;

        const args = message.content.slice(account.prefix.length).trim().split(/ +/g)
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        try {
            if (message.channel.type == "DM" || message.channel.type == "GROUP_DM") {
                if (cmd.canExecuteInDM == false) {
                    console.log(info, "Can't execute this command in DM.".red);
                    return message.delete();
                } else {
                    if (cmd) {
                        cmd.run(client, message, args, X, info, success);
                    }
                }
            } else {
                if (!message.member.permissions.has([cmd.permissions])) {
                    console.log(X, `You don't have one of these permissions to perform this action: ${cmd.permissions}`.red);
                    return message.delete();
                } else {
                    if (cmd) {
                        console.log("[".magenta+"$".blue+"]".magenta, `Executed ${cmd.name}.`.blue.italic)
                        cmd.run(client, message, args, X, info, success);
                    }
                }
            }
        } catch {
            return
        }
        
    }
}
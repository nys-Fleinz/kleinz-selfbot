const { account } = require('../../settings/config.json')
const colors = require("colors")
const kleinz = require("../../utils/kleinz")

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
                    console.log(kleinz.console.X, "Can't execute this command in DM.".red);
                    return message.delete();
                } else {
                    if (cmd) {
                        console.log(kleinz.console.run, `[DM]`.red, `Executed ${cmd.name}.`.blue.italic)
                        cmd.run(client, message, args, kleinz);
                    }
                }
            } else {
                if (!message.member.permissions.has([cmd.permissions])) {
                    console.log(kleinz.console.X, `You don't have one of these permissions to perform this action: ${cmd.permissions}`.red);
                    return message.delete();
                } else {
                    if (cmd) {
                        console.log(kleinz.console.run, `Executed ${cmd.name}.`.blue.italic)
                        cmd.run(client, message, args, kleinz);
                    }
                }
            }
        } catch (err) {
            return console.log(err)
        }
        
    }
}
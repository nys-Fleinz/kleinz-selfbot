const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');

module.exports = {
    name: "help",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "utils",
    usage: "help <command>",
    examples: ["help", "help embed"],
    description: "Need help D:",
    run: (client, message, args, X, info, success) => {
        const help = {};
        if (!args.length) {
            for (const category of commandFolder) {
                const commands = client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name);
                help[`# ${category.replace(/(^\w|\s\w)/g, e => e.toUpperCase())}`] = commands.map(cmd => `\`${cmd}\``);
            }
            const formattedHelp = Object.entries(help)
                .map(([category, commands]) => `${category}\n${commands.join(', ')}`)
                .join('\n');
            message.edit(`${formattedHelp}`);
        } else {
            const cmd = client.commands.get(args[0].toLowerCase());
            if (cmd == undefined) return message.edit(X, "This command does not exist.".red)

            message.edit(`\`\`\`ansi
\u001b[0;33m----------- \u001b[0;35m${cmd.name.replace(/(^\w|\s\w)/g, e => e.toUpperCase())} \u001b[0;33m-----------
\u001b[4;34mDescription:\u001b[0;36m ${cmd.description}
\u001b[4;34mUsage:\u001b[0;32m ${cmd.usage}
\u001b[4;34mExamples:\u001b[0;32m ${cmd.examples.join("\n\u001b[0;32m")}
\u001b[4;34mCategory:\u001b[0;32m ${cmd.category}
\u001b[4;34mPermissions:\u001b[0;31m ${cmd.permissions.join(", ")}
\u001b[0;33m----------- \u001b[0;35m${cmd.name.replace(/(^\w|\s\w)/g, e => e.toUpperCase())} \u001b[0;33m-----------
\`\`\``)
        }
    }
};
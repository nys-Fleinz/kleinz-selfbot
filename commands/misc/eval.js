const fs = require("fs")

module.exports = {
    name: "eval",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "misc",
    usage: "eval <cmd>",
    examples: ["eval client.cache"],
    description: "Evaluate a cmd (await is used)",
    run: async (client, message, args, kleinz) => {
        args = args.join(" ");
        console.log(kleinz.console.success, "Executing:".blue, args.green)
        try {
            let result = await new Function('client', 'message', 'args', `return ${args}`)(client, message, args);


            if (typeof result === 'object') {
                result = JSON.stringify(result, null, 2);
            }

            if(result == undefined) {
                result = "undefined"
            }
            console.log("LENGHT:", result.length)
            if(result.length > 1900) {
                message.channel.send('The result is over 2000 characters. See console.')
                console.log(result)
            } else {
                message.edit(`\`\`\`ansi\n\u001b[0;34m[>] \u001b[0;32m${args}\n\`\`\`\n\`\`\`js\n${result}\n\`\`\``);
            }

            
        } catch (error) {
            message.channel.send(`\`\`\`js\n${error}\n\`\`\``);
        }
    }
};

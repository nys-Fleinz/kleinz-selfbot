const fs = require("fs")

module.exports = {
    name: "eval",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "misc",
    usage: "eval <cmd>",
    examples: ["eval client.cache"],
    description: "Evaluate a cmd (await is used)",
    run: async (client, message, args, X, info, success) => {
        args = args.join(" ");
        console.log(success, "Executing:".blue, args.green)

        try {

            let result = await new Function('client', 'message', 'args', `return ${args}`)(client, message, args);


            if (typeof result === 'object') {
                result = JSON.stringify(result, null, 2);
            }

            if(result == undefined) {
                result = "undefined"
            } 
            
            if(result.match(/[a-zA-Z0-9]/g).length > 2000) {
                message.channel.send('The result is over 2000 characters. See console.')
                console.log(result)
            } else {
                message.channel.send(`\`\`\`js\n${result}\n\`\`\``);
            }

            
        } catch (error) {
            message.channel.send(`\`\`\`js\n${error}\n\`\`\``);
        }
    }
};

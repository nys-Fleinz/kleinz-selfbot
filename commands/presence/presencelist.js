const fs = require('fs');

module.exports = {
    name: "presencelist",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "presence",
    usage: "presencelist",
    examples : ["presencelist"],
    description: "List all presences config.",
    run: async (client, message, args, kleinz) => {
        const arrayFiles = []
        const presenceFolder = './settings/presences/';

        try {
            fs.readdirSync(presenceFolder).forEach(file => {
                arrayFiles.push(file)
            });
    
            message.edit(`\`\`\`ansi
            \u001b[0;33m----------- \u001b[0;35mPRESENCE CONFIGS \u001b[0;33m-----------
            \u001b[0;36m ${arrayFiles.join("\n")}
            
            \u001b[0;33m----------------------------------------\`\`\``)
        } catch {
            console.log(kleinz.console.X, "Error while listing cfgs.".red)
        }
        
    }
}
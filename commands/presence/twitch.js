const Discord = require("discord.js-selfbot-v13");

module.exports = {
    name: "twitch",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "presence",
    usage: "twitch [title], <author>, <link>",
    examples: ["twitch title: YEEHAW", "twitch title: Fleinz is cool, author: Kleinz, link: https://souncdcloud.com"],
    description: "Set presence to a twitch activity.",
    run: async (client, message, args, kleinz) => {
        await message.delete();

        const allParameters = args.join(' ');

        const twitchPresence = new Discord.RichPresence()
        twitchPresence.setApplicationId('1128680619073880195')
        twitchPresence.setType('WATCHING')
        try {
            var title = allParameters.split("title: ")[1].split(',')[0];
        } catch {
            var title = "";
        }
        try {
            var description = allParameters.split("description: ")[1].split(',')[0];
        } catch {
            var description = "";
        }
        try {
            var link = allParameters.split("link: ")[1].split(',')[0];
        } catch {
            var link = "";
        }
        try {
            var author = allParameters.split("author: ")[1].split(',')[0];
        } catch {
            var author = "";
        }
        if(!title) return console.log("Set a title at least")
        if(author) twitchPresence.setState()
        twitchPresence.setName("Twitch")
        if(author) { twitchPresence.setDetails(`[${author}] ${title}`) } else {twitchPresence.setDetails(`${title}`)}
        twitchPresence.setStartTimestamp(Date.now() / 1000)
        twitchPresence.setAssetsLargeImage('1130467668982509650')
        if(description) twitchPresence.setAssetsLargeText(`${description}`)
        twitchPresence.setAssetsSmallImage('1130235663489441933')
        twitchPresence.setAssetsSmallText('Live')
        if(link) twitchPresence.addButton('Join Stream', link)
        try {
            client.user.setActivity(twitchPresence)
            console.log(kleinz.console.success, `${'Presence for'.green} ${client.user.username.blue} ${"was set to:".green}
 ${"- Title:".green} ${title.yellow}
 ${"- Description:".green} ${description.yellow}
 ${"- Author:".green} ${author.yellow}
 ${"- Link:".green} ${link.yellow}`)
        } catch {
            return console.log("There was a problem when applying your presence.")
        }
    },
};
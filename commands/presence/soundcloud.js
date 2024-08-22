const Discord = require("discord.js-selfbot-v13");

module.exports = {
    name: "soundcloud",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "presence",
    usage: "soundcloud [title], <author>, <link>",
    examples: ["soundcloud title: YEEHAW", "soundcloud title: naht3 is cool, author: Kleinz, link: https://souncdcloud.com"],
    description: "Set presence to a soundcloud activity.",
    run: async (client, message, args, X, info, success) => {
        await message.delete();

        const allParameters = args.join(' ');

        const soundcloudPresence = new Discord.RichPresence()
        soundcloudPresence.setApplicationId('1128680619073880195')
        soundcloudPresence.setType('LISTENING')
        try {
            var title = allParameters.split("title: ")[1].split(',')[0];
        } catch {
            var title = "";
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
        if(!title) return console.log(info, "Set a title at least".yellow)
        if(author) soundcloudPresence.setState(`By ${author}`)
        soundcloudPresence.setName("SoundCloud")
        soundcloudPresence.setDetails(title)
        soundcloudPresence.setAssetsLargeImage('1128681015729197106')
        if(link) soundcloudPresence.addButton('Join Listening', link)

        try {
            client.user.setActivity(twitchPresence)
            console.log(success, `${'Presence for'.green} ${client.user.username.blue} ${"was set to:".green}
 ${"- Title:".green} ${title.yellow}
 ${"- Author:".green} ${author.yellow}
 ${"- Link:".green} ${link.yellow}`)
        } catch {
            return console.log(info, "There was a problem when applying your presence.".yellow)
        }
        client.user.setActivity(soundcloudPresence);
    },
};
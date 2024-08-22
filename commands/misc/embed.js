const { WebEmbed } = require("discord.js-selfbot-v13");

module.exports = {
    name: "embed",
    permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
    canExecuteInDM: true,
    category: "misc",
    usage: "embed [title], <author>, <color>, <description>, <image>, <thumbnail>, <provider>",
    examples: ["embed title: Baguette is cool, author: Kleinz, color: RED, description: Kitty :3, image: https://tinyurl.com/nseuyyc4, provider: Kleinz", "embed title: Baguette is cool, author: Kleinz, color: RED, description: Kitty :3, thumbnail: https://tinyurl.com/nseuyyc4, provider: Kleinz"],
    description: "Make embed.",
    
    run: async (client, message, args, X, info, success) => {
        message.delete();

        async function deleteMessage(me) {
            setTimeout(() => {
                me.delete();
            }, 2000);
        }

        if (!args[0]) return await message.channel.send("Provide a title at least.").then(m => deleteMessage(m));

        const allParameters = args.join(' ');

        try {
            var embedTitle = allParameters.split("title: ")[1].split(',')[0];
        } catch {
            var embedTitle = "";
        }
        try {
            var embedAuthor = allParameters.split("author: ")[1].split(',')[0];
        } catch {
            var embedAuthor = "";
        }
        try {
            var embedColor = allParameters.split("color: ")[1].split(',')[0];
        } catch {
            var embedColor = "";
        }
        try {
            var embedDescription = allParameters.split("description: ")[1].split(',')[0];
        } catch {
            var embedDescription = "";
        }
        try {
            var embedImage = allParameters.split("image: ")[1].split(',')[0];
        } catch {
            var embedImage = "";
        }
        try {
            var embedThumbnail = allParameters.split("thumbnail: ")[1].split(',')[0];
        } catch {
            var embedThumbnail = "";
        }
        try {
            var embedProvider = allParameters.split("provider: ")[1].split(',')[0];
        } catch {
            var embedProvider = "";
        }

        if (!embedTitle) return await message.channel.send("You need a title!").then(m => deleteMessage(m));
        if (embedImage && embedThumbnail) return await message.channel.send("Can't put image and thumbnail at the same time!").then(m => deleteMessage(m));

        var finalEmbed = new WebEmbed().setTitle(embedTitle);

        if (embedDescription) finalEmbed.setDescription(embedDescription);
        if (embedAuthor) finalEmbed.setAuthor({ name: embedAuthor });
        if (embedProvider) finalEmbed.setProvider({ name: embedProvider });
        if (embedColor) finalEmbed.setColor(embedColor);
        if (embedImage) finalEmbed.setImage(embedImage);
        if (embedThumbnail) finalEmbed.setThumbnail(embedThumbnail);

        message.channel.send({ embeds: [finalEmbed] });
    }
};
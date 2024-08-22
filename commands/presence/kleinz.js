const { RichPresence } = require("discord.js-selfbot-v13");

module.exports = {
    name: "kleinz",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "presence",
    usage: "kleinz",
    examples: ["kleinz"],
    description: "Set presence to Kleinz default activity.",
    run: async (client, message, args) => {
        message.delete()

        const getExtendURL = await RichPresence.getExternal(
            client,
            '817229550684471297',
            'https://i.imgur.com/NYpG3R2.gif',
            'https://i.imgur.com/nabJ9bN.gif',
        );
        const kleinzRcp = new RichPresence()
            .setApplicationId('817229550684471297')
            .setType('COMPETING')
            .setURL('https://github.com/Krysstals/Kleinz-selfbot')
            .setState(`Logged as ${client.user.username}`)
            .setName('KLEINZ')
            .setDetails('KLEINZ')
            .setStartTimestamp(Date.now())
            .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            .setAssetsLargeText('Kleinz Selfbot')
            .setAssetsSmallImage(getExtendURL[1].external_asset_path)
            .setAssetsSmallText('by fleinz.')
            .addButton('Github 💜 (not published yet)', 'https://github.com/Krysstals/')
        client.user.setActivity(kleinzRcp);

    },
};
module.exports = {
    name: "role.disco",
    permissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    canExecuteInDM: true,
    category: "fun",
    usage: "role.disco <roleMention/id>",
    examples: ["role.disco @community", "role.disco 1234567782937786696"],
    description: "Change choosen role to RGB weeee",
    run: async (client, message, args, X, info, success) => {
        message.delete()
        const rgbColors = [
            '#FF0000',
            '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00',
            '#00FF7F', '#00FFFF', '#007FFF', '#0000FF',
            '#7F00FF', '#FF00FF', '#FF007F', '#FF0000'
        ];

        let guildId = message.guild.id
        console.log(kleinz.console.info, "Getting guild...".yellow)
        const guild = await client.guilds.fetch(guildId)
        console.log(kleinz.console.success, "Guild:".blue, guild.name.green)
        console.log(kleinz.console.info, "Getting role...".yellow)
        const role = await guild.roles.cache.find((r) => r.id === '1276190436049944606');
        console.log(kleinz.consolesuccess, "Role:".blue, role.name.green)
        for (const color in rgbColors) {
            role.edit({ "color": rgbColors[color] })
            await new Promise(resolve => setTimeout(resolve, 4000))
        }
    }
}
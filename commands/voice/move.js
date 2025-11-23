module.exports = {
    name: "move",
    permissions: ['MOVE_MEMBERS'],
    canExecuteInDM: false,
    category: "voice",
    usage: "move @user <voiceChannelID>",
    examples: ["move @Kleinz 12345678901223456"],
    description: "Start a call",
    run: async (client, message, args, kleinz) => {
        message.delete()
        let user = message.mentions.users.first();
        let guildId = message.guildId;
        let channelString = args.slice(1).join(" ");

        if (!user) {
            user = message.guild.members.cache.find(member =>
                member.id === args[0] ||
                member.displayName.toLowerCase().includes(args[0].toLowerCase()) ||
                member.user.username.toLowerCase().includes(args[0].toLowerCase())
            );
            if (!user) return console.log(kleinz.console.X, "Impossible de trouver l'utilisateur".red);
        }

        let voiceChannel = message.guild.channels.cache.get(channelString);

        if (!voiceChannel) {
            voiceChannel = message.guild.channels.cache.find(channel =>
                channel.name.toLowerCase().includes(channelString.toLowerCase()) &&
                channel.isVoice() &&
                channel.guild.id === guildId
            );
        }

        if (!user.voice.channel) return console.log(kleinz.console.X, "L'utilisateur n'est pas dans un salon vocal".red);
        if (!voiceChannel || !voiceChannel.isVoice()) return console.log(kleinz.console.X, "Impossible de trouver le salon vocal".red);
        if (voiceChannel.guild.id !== guildId) return console.log(kleinz.console.X, "Impossible de bouger un utilisateur sur un serveur différent".red);

        let status = await user.voice.setChannel(voiceChannel);

        console.log(kleinz.console.success, `${user.displayName} a été déplacé dans ${voiceChannel.name}.`.green);
    }
}
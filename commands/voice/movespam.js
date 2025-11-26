module.exports = {
    name: "movespam",
    permissions: ['MOVE_MEMBERS'],
    canExecuteInDM: false,
    category: "voice",
    usage: "movespam <user> <channel1> <channel2>",
    examples: ["movespam @Kleinz General Afk"],
    description: "Déplace un utilisateur en boucle entre deux salons (Refaire la commande pour arrêter)",
    run: async (client, message, args, kleinz) => {
        if (message.deletable) message.delete();

        if (!client.moveSpamTasks) {
            client.moveSpamTasks = new Map();
        }

        let targetMember = message.mentions.members.first();
        if (!targetMember) {
            const search = args[0]?.toLowerCase();
            if (!search) return console.log(kleinz.console.X, "Veuillez indiquer un utilisateur.".red);

            targetMember = message.guild.members.cache.find(member =>
                member.id === args[0] ||
                member.displayName.toLowerCase().includes(search) ||
                member.user.username.toLowerCase().includes(search)
            );
        }

        if (!targetMember) return console.log(kleinz.console.X, "Utilisateur introuvable.".red);


        if (client.moveSpamTasks.has(targetMember.id)) {
            const intervalId = client.moveSpamTasks.get(targetMember.id);
            clearInterval(intervalId);
            client.moveSpamTasks.delete(targetMember.id);
            console.log(kleinz.console.success, `MoveSpam arrêté pour ${targetMember.displayName}.`.green);
            return;
        }


        if (!args[1] || !args[2]) {
            return console.log(kleinz.console.X, "Il faut préciser DEUX salons vocaux (ID ou partie du nom).".red);
        }

        if (!targetMember.voice.channel) {
            return console.log(kleinz.console.X, "L'utilisateur n'est pas connecté en vocal.".red);
        }

        const findChannel = (query) => {
            let ch = message.guild.channels.cache.get(query);
            if (!ch) {
                ch = message.guild.channels.cache.find(c =>
                    c.name.toLowerCase().includes(query.toLowerCase()) && c.isVoice()
                );
            }
            return ch;
        };

        const channel1 = findChannel(args[1]);
        const channel2 = findChannel(args[2]);

        if (!channel1 || !channel2) {
            return console.log(kleinz.console.X, "L'un des salons est introuvable.".red);
        }

        console.log(kleinz.console.success, `Début du MoveSpam sur ${targetMember.displayName}...`.green);

        const interval = setInterval(async () => {
            if (!targetMember.voice.channel) {
                clearInterval(interval);
                client.moveSpamTasks.delete(targetMember.id);
                console.log(`Arrêt automatique (utilisateur déconnecté).`.gray);
                return;
            }

            try {
                if (targetMember.voice.channelId === channel1.id) {
                    await targetMember.voice.setChannel(channel2);
                } else {
                    await targetMember.voice.setChannel(channel1);
                }
            } catch (err) {
                console.log(`Erreur de déplacement (Rate limit ou permissions).`);
            }

        }, 1000);
        client.moveSpamTasks.set(targetMember.id, interval);
    }
}
module.exports = {
    name: "autoreact",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "messages",
    usage: "autoreact <userID> <emoji>",
    examples: ["autoreact kleinz 🚨"],
    description: "Ajoute automatiquement l'émoji sous chaque message de l'utilisateur (Répéter la commande pour arrêter)",
    run: async (client, message, args, kleinz) => {
        message.delete().catch(() => {});

        if (!client.autoReactUsers) {
            client.autoReactUsers = new Map();
            client.hookAutoReact = async (msg) => {
                if (client.autoReactUsers.has(msg.author.id)) {
                    const emojiToReact = client.autoReactUsers.get(msg.author.id);
                    try {
                        await msg.react(emojiToReact);
                    } catch (e) {
                        console.log(kleinz.console.X + `Impossible de réagir sur ${msg.author.name} (Bloqué ou pas d'accès)`);
                    }
                }
            }
            client.on('messageCreate', client.hookAutoReact);
        }



        let targetId = args[0];
        if (message.mentions.users.size > 0) {
            targetId = message.mentions.users.first().id;
        }

        if (!targetId || isNaN(targetId)) {
            const memberFound = message.guild?.members.cache.find(m =>
                m.displayName.toLowerCase().includes(args[0]?.toLowerCase()) ||
                m.user.username.toLowerCase().includes(args[0]?.toLowerCase())
            );
            if (memberFound) targetId = memberFound.id;
            else return console.log(kleinz.console.X, "Utilisateur introuvable.".red);
        }

        if (client.autoReactUsers.has(targetId)) {
            client.autoReactUsers.delete(targetId);
            console.log(kleinz.console.success, `AutoReact arrêté pour l'ID ${targetId}.`.green);
            if(client.autoReactUsers.size === 0) {
                client.off('messageCreate', client.hookAutoReact);
                client.hookAutoReact = null;
                client.autoReactUsers = null;
            }

            return;
        }

        const emoji = args[1];
        if (!emoji) return console.log(kleinz.console.X, "Il faut préciser un émoji !".red);

        client.autoReactUsers.set(targetId, emoji);
        console.log(kleinz.console.success, `AutoReact activé sur ${targetId} avec ${emoji}`.green);
    }
}
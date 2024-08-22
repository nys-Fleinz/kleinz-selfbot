module.exports = {
    name: "unbanall",
    permissions: ["BAN_MEMBERS"],
    canExecuteInDM: false,
    category: "raid",
    usage: "unbanall",
    examples : ["unbanall"],
    description: "Unban every banned user.",
    run: async (client, message, args) => {
        try {
            const guild = message.guild;
            message.delete()
            const bans = await guild.bans.fetch();

            console.log(`Members banned: ${bans.size}\nStarting unbanning...`);

            const banArray = Array.from(bans.values());
            const rateLimit = 40;
            const interval = Math.ceil(1000 / rateLimit);

            let membersUnbanned = 0;

            for (let i = 0; i < banArray.length; i++) {
                try {
                    await guild.members.unban(banArray[i].user);
                    console.log(`Unbanned: ${banArray[i].user.username}`);
                    membersUnbanned++;
                } catch {
                    console.log(`Can't unban ${userArray[i].user.username}`)
                }


                if ((i + 1) % rateLimit === 0 && i !== banArray.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, interval));
                }
            }

            console.log(`Unbanned ${membersUnbanned}/${bans.size}`);
        } catch (error) {
            console.error("There was an error:", error);
        }
    },
};
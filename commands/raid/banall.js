module.exports = {
    name: "banall",
    permissions: ["BAN_MEMBERS"],
    canExecuteInDM: false,
    category: "raid",
    usage: "banall <reason>",
    examples: ["banall Kleinz is the best :D"],
    description: "Ban every possible member in the server.",
    run: async (client, message, args) => {
      try {
        const guild = message.guild;
        message.delete();
        const users = await guild.members.fetch();
  
        console.log(`Members to ban: ${users.size}\nStarting banning...`);
  
        const userArray = Array.from(users.values());
        const rateLimit = 40;
        const interval = Math.ceil(1000 / rateLimit);
  
        let membersBanned = 0;
        const banReason = args.length > 0 ? args.join(" ") : "Kleinz :D";
  
        for (let i = 0; i < userArray.length; i++) {
          const user = userArray[i].user;
          try {
            await guild.members.ban(user, { reason: banReason });
            console.log(`Banned: ${user.username}`);
            membersBanned++;
          } catch (error) {
            if (error.code === 10007) {
              console.log(`User ${user.username} is already banned.`);
            } else {
              console.log(`Error banning user ${user.username}: ${error}`);
            }
          }
  
          if ((i + 1) % rateLimit === 0 && i !== userArray.length - 1) {
            await new Promise((resolve) => setTimeout(resolve, interval));
          }
        }
  
        console.log(`Banned ${membersBanned}/${users.size}`);
      } catch (error) {
        console.error("There was an error:", error);
      }
    },
  };
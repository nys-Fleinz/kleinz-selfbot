const https = require('https');
const config = require("../../settings/config.json");

module.exports = {
    name: 'devices',
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: 'account',
    usage: 'devices',
    examples: ['devices'],
    description: 'Send all devices connected to your account.',
    run: async (client, message, args, X, info, success) => {
        message.delete();
        let numberOfDevices = -1;
        // MAKE REQUEST
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `${config.account.TOKEN}`,
                'x-super-properties': 'ewogICJvcyI6ICJXaW5kb3dzIiwKICAiY2xpZW50X2J1aWxkX251bWJlciI6IDE1MjQ1MAp9'
            }
        };

        let data = '';

        const fetchData = new Promise((resolve, reject) => {
            const request = https.request('https://discord.com/api/v9/auth/sessions', options, (response) => {

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    resolve(data);
                });
            });

            request.on('error', (error) => {
                reject(error);
            });

            request.end();
        });

        try {
            const responseData = await fetchData;
            data = responseData;
        } catch (error) {
            return console.error('Error:', error.message);
        }
        // MAKE REQUEST



        // FORMAT REQUEST
        const userSessions = JSON.parse(data)["user_sessions"];

        let messageToSend = "";

        for (let i = 0; i < userSessions.length; i++) {
            const session = userSessions[i];
            const idHash = session.id_hash;
            const lastUsedTime = new Date(session.approx_last_used_time);
            const OS = session.client_info.os;
            const platform = session.client_info.platform;
            const location = session.client_info.location;

            const formattedDate = formatDate(lastUsedTime);

            messageToSend += `\n\u001b[1;36mID Hash:\u001b[0;32m ${idHash}\n\u001b[1;36mLast Used Time:\u001b[0;32m ${formattedDate}\n\u001b[1;36mClient Info:\n    \u001b[1;36mOS: \u001b[0;32m${OS}\n    \u001b[1;36mPlatform: \u001b[0;32m${platform}\n    \u001b[1;36mLocation: \u001b[0;32m${location}`;

            if (i !== userSessions.length - 1) {
                messageToSend += "\n\n            \u001b[1;35m-----------------\n";
                if(numberOfDevices == -1) {
                    message.channel.send("```ansi\n\u001b[0;33m----------- \u001b[0;35mDevices Connected \u001b[0;33m-----------```");
                }
                numberOfDevices++
                if(numberOfDevices == 3) {
                    message.channel.send("```ansi\n" + messageToSend + "\n\n\u001b[0;33m-----------------------------------------```");
                    messageToSend = ''
                    numberOfDevices = 0
                }
            }
        }
    },
};

function formatDate(date) {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    return `${day} ${month} ${year} ${formattedHours}:${minutes}${amPm}`;
}

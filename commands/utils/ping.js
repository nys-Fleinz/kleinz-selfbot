module.exports = {
    name: "ping",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "utils",
    usage: "ping",
    examples : ["ping"],
    description: "Pong :D",
    run: (client, message, args, X, info, success) => {
        message.edit(`\`\`\`ansi\n\u001b[0;35mPong :D\n\u001b[0;34mLatency: \u001b[0;32m${client.ws.ping}ms\n\u001b[0;34mUptime: \u001b[0;32m${((Date.now() - client.readyTimestamp) / 60000).toFixed(0)}min\`\`\``)
    }
}
module.exports = {
    name: "uptime",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "selfbot",
    usage: "uptime",
    examples : ["uptime"],
    description: "Send uptime using selfbot.",
    run: (client, message, kleinz) => {
        message.edit(`\`\`\`ansi
\u001b[4;35mUptime:\u001b[0;0m \u001b[0;32m${((Date.now() - client.readyTimestamp) / 60000).toFixed(0)} min wasted on discord.\`\`\``)
    }
}
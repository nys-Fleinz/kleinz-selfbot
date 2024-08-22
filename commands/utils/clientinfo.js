module.exports = {
    name: "clientinfo",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "utils",
    usage: "clientinfo",
    examples : ["clientinfo"],
    description: "Send client infos.",
    run: (client, message, args) => {
        console.log(client.name);
    }
}
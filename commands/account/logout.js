module.exports = {
    name: "logout",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "account",
    usage: "logout",
    examples : ["logout"],
    description: "Log out everyone and change token account.",
    run: (client, message, args, X, info, success) => {
        try {
            client.logout()
        } catch(error) {
            console.log(`Error code: ${error.code} Error: ${error}`)
        }
    }
}
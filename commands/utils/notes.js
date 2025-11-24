module.exports = {
    name: "notes",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "utils",
    usage: "notes <here>",
    examples : ["notes", "notes here"],
    description: "Renvoi toutes les notes liées au compte.",
    run: async (client, message, args) => {
        let notes = client.user.notes;
        if(args[0] === "here") {
            let messageFormated = "";
            for(let note of notes) {
                messageFormated += "<@"+note[0]+">\n> " + note[1]+"\n\n";
            }
            message.edit(messageFormated)
        } else {
            message.delete();
            console.log(notes);
        }
    }
}
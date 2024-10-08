const { promisify } = require('util')
const { glob } = require('glob')
const pGlob = promisify(glob)

module.exports = async (client) => {
    (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async cmdFile => {
        const cmd = require(cmdFile);
        client.commands.set(cmd.name, cmd)

        if(!cmd.name || !cmd.description || cmd.name == "" || cmd.description == "") return console.log(`Name or Description missing for this command: ${cmdFile}`)
        if(!cmd.permissions) return console.log(`~~~~~~\nNo permissions set for: ${cmd.name} at ${cmdFile}\n~~~~~~`)
        cmd.permissions.forEach(permission => {
            if(!permissionList.includes(permission)) return console.log(`~~~~~~\nTyping error in permissions was set to the command: "${cmd.name.toUpperCase()}" Path: ${cmdFile}\n~~~~~~`)
        })
        if(!cmd.category) return console.log(`~~~~~~\nNo category set to ${cmd.name} at ${cmdFile}\n~~~~~~`)
        if(!cmd.usage) return console.log(`~~~~~~\nNo usage set to ${cmd.name} at ${cmdFile}`)
        if(!cmd.examples) return console.log(`~~~~~~\nNo examples set to ${cmd.name} at ${cmdFile}\n~~~~~~`)
    })
}

const permissionList = ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'PRIORITY_SPEAKER', 'STREAM', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'VIEW_GUILD_INSIGHTS', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_EMOJIS_AND_STICKERS', 'USE_APPLICATION_COMMANDS', 'REQUEST_TO_SPEAK', 'MANAGE_EVENTS', 'MANAGE_THREADS', 'USE_PUBLIC_THREADS', 'CREATE_PUBLIC_THREADS', 'USE_PRIVATE_THREADS', 'CREATE_PRIVATE_THREADS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS', 'START_EMBEDDED_ACTIVITIES', 'MODERATE_MEMBERS'];
const { RichPresence } = require('discord.js-selfbot-v13');
const package = require("../../package.json")
const { exec } = require("node:child_process")

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        exec('scripts\\resize.exe "Kleinz SelfBot" 1000 600', (error, stdout) => {
            if (error) console.log("Error while bringing window to front.", error)
        })
        console.log(`Logged into ${client.user.username}.`);
        exec("cls")
        console.log(`\n\n\n
                                         ${"*".brightCyan}     ${",MMM88&&&.".grey}            ${"*".brightCyan}
                                              ${"MMMM888&&&&&".grey}    ${".".brightCyan}
                                             ${"MMMM888&&&&&&&".grey}
                                 ${"*".brightCyan}           ${"M  ".grey + "[KLEINZ]".yellow + "  &".grey}
                                             ${"MMM888&&&&&&&&".grey}
                                             ${"'MMM888&&&&&&'".grey}
                                               ${"'MMM88&&&'".grey}      ${"*".brightCyan}
                                      ${"|\\___/|".gray}
                                      ${")     (".gray}             ${".".brightCyan}              ${"'".brightCyan}
                                     =${"\\     /".gray}=
                                       ${")".gray+"===".red+"(".gray}       ${"*".brightCyan}
                                      ${"/     \\".gray}                   ${"~ by Fleinz. ~  " + "v".underline.magenta +package.version.underline.magenta}
                                      ${"|     |".gray}
                                     ${"/       \\".gray}
                                     ${"\\       /".gray} 
                              ${"_/\\_/\\_/".blue + "\\__  _/".gray + "_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_".blue}
                              ${"|  |  |  |".blue + "( (".gray + "  |  |  |  |  |  |  |  |  |  |".blue}
                              ${"|  |  |  | ".blue + ") )".gray + " |  |  |  |  |  |  |  |  |  |".blue}
                              ${"|  |  |  |".blue + "(_(".gray + "  |  |  |  |  |  |  |  |  |  |".blue}
                              ${"|  |  |  |  |  |  |  |  |  |  |  |  |  |  |".blue}
                              ${"|  |  |  |  |  |  |  |  |  |  |  |  |  |  |".blue}

                              ${"///////////////////////////////////////////".magenta}
                              ${"//".magenta}${" ".repeat((31-client.user.username.length)/2)}${"WELCOME".green} ${(client.user.username).bold.underline.cyan}${" ".repeat((31-client.user.username.length)/2)}${"//".magenta}
                              ${"///////////////////////////////////////////".magenta}`)

        const getExtendURL = await RichPresence.getExternal(
                client,
                '817229550684471297',
                'https://i.imgur.com/NYpG3R2.gif',
                'https://i.imgur.com/nabJ9bN.gif',
        );

        const r = new RichPresence()
            .setApplicationId('817229550684471297')
            .setType('COMPETING')
            .setURL('https://github.com/Krysstals/Kleinz-selfbot')
            .setState(`Logged as ${client.user.username}`)
            .setName('KLEINZ')
            .setDetails('KLEINZ')
            .setStartTimestamp(Date.now())
            .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            .setAssetsLargeText(`Kleinz Selfbot v${package.version}`)
            .setAssetsSmallImage(getExtendURL[1].external_asset_path)
            .setAssetsSmallText('by fleinz.')
            .addButton('Github 💜 (not published yet)', 'https://github.com/Krysstals/')

        client.user.setActivity(r);
    }
}
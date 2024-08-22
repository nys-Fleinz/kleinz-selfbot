const { SpotifyRPC } = require("discord.js-selfbot-v13");
const settings = require('../../settings/config.json');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..', '..', 'settings', 'spotifyCfgs');

module.exports = {
    name: "spotify",
    permissions: ['SEND_MESSAGES'],
    canExecuteInDM: true,
    category: "presence",
    usage: "spotify <list> <load> <yourConfigFileName>",
    examples: ["spotify", "spotify load myAwesomeConfigName", "spotify list"],
    description: "Set presence to a spotify activity.",
    run: async (client, message, args, X, info, success) => {

        if (args[0] === "load") {
            message.delete();
            if(!args[1]) return console.log(info, "Please enter name of your config: spotify load configName".yellow)
            const filePath = path.join(directoryPath, `${args[1]}.json`);
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    return console.log(X, `The file "${args[1]}.json" does not exist. ${err}`.red);
                } else {
                    try {
                        loadSpotifyCfg(filePath);
                    } catch (error) {
                        console.log(X, "There was an error. Please check if you have set all the required settings and have a valid file name.".red);
                        console.log(error);
                    }
                }
            });

        } if (args[0] === "list") {
            message.edit(`\`\`\`ansi
\u001b[0;33m----------- \u001b[0;35mSPOTIFY CONFIGS \u001b[0;33m-----------
\u001b[0;36m -> ${fs.readdirSync(directoryPath).join("\n\u001b[0;36m -> ")}

\u001b[0;33m---------------------------------------\`\`\``)

        } else {
            message.delete();
            const filePath = path.join(directoryPath, `${settings.RPC.spotify_defaultFileName}.json`);
            console.log(success, `Loaded default file: "${settings.RPC.spotify_defaultFileName}.json"`.green);
            try {
                loadSpotifyCfg(filePath);
            } catch (error) {
                console.log(X, "There was an error. Please check if you have set all the required settings and have a valid file name.".red);
                console.log(error);
            }
        }

        function loadSpotifyCfg(filePath) {
            const spotifyCfg = require(filePath);
            if(!spotifyCfg.IMAGES.largeImageID || !spotifyCfg.ALBUM.albumName || !spotifyCfg.ARTISTS.artistsName || !spotifyCfg.SONG.songName || !spotifyCfg.SONG_LENGHT.minutesSongDuration || !spotifyCfg.SONG_LENGHT.secondsSongDuration) return console.log(info, "Check if you have filled all the required settings in your config.".yellow);
            const spotifyStatus = new SpotifyRPC(client);
            spotifyStatus.setAssetsLargeImage(`spotify:${spotifyCfg.IMAGES.largeImageID}`);
            if(spotifyCfg.IMAGES.smallImageID) spotifyStatus.setAssetsSmallImage(`spotify:${spotifyCfg.IMAGES.smallImageID}`);
            spotifyStatus.setAssetsLargeText(spotifyCfg.ALBUM.albumName);
            spotifyStatus.setState(spotifyCfg.ARTISTS.artistsName);
            spotifyStatus.setDetails(spotifyCfg.SONG.songName);
            spotifyStatus.setStartTimestamp(Date.now());
            spotifyStatus.setEndTimestamp(Date.now() + 1_000 * (spotifyCfg.SONG_LENGHT.minutesSongDuration * 60 + spotifyCfg.SONG_LENGHT.secondsSongDuration));
            if(spotifyCfg.SONG.songID) spotifyStatus.setSongId(spotifyCfg.SONG.songID);
            if(spotifyCfg.ALBUM.albumID) spotifyStatus.setAlbumId(spotifyCfg.ALBUM.albumID);
            if(spotifyCfg.ARTISTS.artistsID) spotifyStatus.setArtistIds(spotifyCfg.ARTISTS.artistsID);
            
            try {
                client.user.setActivity(spotifyStatus);
                console.log(success, `${'Presence for'.green} ${client.user.username.blue} ${"was set to:".green}
     ${"- Title:".green} ${spotifyCfg.SONG.songName.yellow}
     ${"- Album Title:".green} ${spotifyCfg.ALBUM.albumName.yellow}
     ${"- Artist:".green} ${spotifyCfg.ARTISTS.artistsName.yellow}`)
            } catch {
                return console.log("There was a problem when applying your presence.")
            }
        }
    },
};
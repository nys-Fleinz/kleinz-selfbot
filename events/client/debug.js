const { account } = require("../../settings/config.json");

module.exports = {
    name: "debug",
    once: false,
    execute(client, ...args) {
        for (const arg of args) {
            if (typeof arg === "string" && arg.includes("Hit a 429")) {
                console.log('HIT A LIMIT OF API')
            } else {
                // console.log(`[DEBUG] ${arg}`);
            } 
        }
    },
};
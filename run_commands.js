const child = require ('child_process')
const discord = require ('discord.js')

module.exports = {
    name: 'terminal',

    run: async(client, message, args) =>{
        const command = args.join("");
    child.exec(command, (err, res) => {
        if (err) return console.log (err);
        message.channel.send(res.slice(0,2000), { code: "js"})
    })
    }
}
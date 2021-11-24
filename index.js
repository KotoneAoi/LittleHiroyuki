const { Client, Intents } = require('discord.js')
const client = new Client({ intents: Object.keys(Intents.FLAGS) })

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})


client.on('messageCreate', async msg => {
  if (msg.content === '死にたい') {  
    setTimeout( function() {
        msg.channel.send('あのー')
        setTimeout( function() {
            msg.channel.send("なんだろな(笑)")
            setTimeout( function() {
                msg.channel.send("思い詰めなくても結構人生何とかなりますよ、(笑)")
            }, 5000 );
        }, 2000 );
    }, 5000 );
}
})

client.on('messageCreate', async msg => {
  if (msg.content === 'ありがとう') {
    setTimeout( function() {
        msg.channel.send('いえいえ(笑)')
      }, 3000 );
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'もう無理') {
    setTimeout( function() {
      msg.channel.send('お前ならできる、頑張れ')
    }, 11000 );
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '助けて') {
    setTimeout( function() {
      msg.channel.send('どうしました？')
    }, 7000 );
  }
})

client.on('messageCreate', async msg=> {
    if (msg.content === '疲れた') {
    setTimeout( function() {
        msg.channel.send('それ普通っすよ')
    }, 10000 );
    }
  })

client.login("")
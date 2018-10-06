const bot = require("../src/bot");

const client = new bot.Mastodon({
    accessToken: "Token",
    APIUrl: "botsin.space"
});

client.SendToot({
    Status: Math.floor(Math.random() * 1000)
}).then(s => {
    s.favouriteStatus();
    setTimeout((() => {
        s.favouriteStatus(false);
    }), 10000);
    s.reply({
        Status: "hello world this is reply"
    }).then(s => console.log(s));
});

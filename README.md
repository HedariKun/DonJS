# DonJS ![CodeFactor](https://www.codefactor.io/repository/github/hedarikun/donjs/badge)
DonJS is a javascript library to create Mastodon bots

# How to start
to start using DonJS you need to create a new folder for your bot after that you need to run terminal or CMD in that directory then run ```npm init -y``` command. after that you need to install the library by running ```npm install donjs```

# Examples
one of the basic examples on how to use this library is
```js
const donjs = require("donjs");
const client = new donjs("your bot token", "your mastodon instance base url");

client.sendStatus("hello world");
```
this example is to show how to send hello world status using donjs. you can get the token from
Settings -> Development -> create a new application then choose whatever name you want then press Submit -> copy the applications access token.

another example is that you can listen for the public statuses the people create or delete
```js
const donjs = require("donjs");
const client = new donjs("your bot token", "your mastodon instance base url");

client.listenForStatuses();
client.on("onStatus", status => {
	console.log("status created!");
});

client.on("onStatusDelete", id => {
	console.log("status deleted!");
});
```

you can also listen for notifications like getting mentioned
```js
const donjs = require("donjs");
const client = new donjs("your bot token", "your mastodon instance base url");

client.listenForNotifications();
client.on("onNotification", notification => {
        console.log("there is a new notification!");
});
```

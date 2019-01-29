# DonJS ![CodeFactor](https://www.codefactor.io/repository/github/hedarikun/donjs/badge) [![npm version](https://badge.fury.io/js/donjs.svg)](https://badge.fury.io/js/donjs)
DonJS is a javascript library to create Mastodon bots

# How to start
1. to start using DonJS you need to create a new folder for your bot
2. then you need to run terminal or CMD in that directory 
3. then run ```npm init -y``` command. 
4. after that you need to install the library by running ```npm install donjs```

to visit the documentation [click here](wiki)

# Examples
One of the basic examples on how to use this library is
```js
const donjs = require("donjs");
const client = new donjs("your bot token", "your mastodon instance base url");

client.sendStatus("hello world");
```
This example is to show, how to send hello world status using donjs. 
you can get the token from
Settings -> Development -> create a new application then choose whatever name you want then press Submit -> copy the applications access token.

another example that explains how you can listen for the public statuses that people create or delete
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

you can also listen for notifications.
```js
const donjs = require("donjs");
const client = new donjs("your bot token", "your mastodon instance base url");

client.listenForNotifications();
client.on("onNotification", notification => {
        console.log("there is a new notification!");
});
```

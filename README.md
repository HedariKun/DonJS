# DonJS
a library to create bots in mastodon

simple example
```js 
const {Client} = require("donjs");
const client = new Client("YOUR TOKEN", "API URL");

client.sendStatus("ping");
```
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  Admins: ["120567626194747392", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.DefaultPrefix || ">", //Default prefix, Server Admins can change the prefix
  Port: process.env.ALWAYSDATA_HTTPD_PORT || 443, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: process.env.CookieSecret || "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/Callum-Mason/The-Chosen-Music-Bot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "https://localhost/", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
  Lavalink: {
    id: "Main",
    host: process.env.LavaHost|| "lava.link",
    port: process.env.LavaPort || 80,
    pass: process.env.LavaPass || "anything as a password",
    secure: process.env.Lavasecure || false,
    retrydelay: process.env.Lavaretrydelay|| 15000
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};

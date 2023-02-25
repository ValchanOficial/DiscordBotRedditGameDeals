# Discord Bot for the #r/GameDeals in Reddit

This bot is a simple Discord bot that get the latest 5 posts from [r/GameDeals](https://www.reddit.com/r/GameDeals/) and send them to a Discord channel.

## Configure your Discord Bot

- Create a bot and get token and client ID: https://discordapp.com/developers/applications/me
- Add bot to your Discord server: OAuth2 URL Generator > Select `bot` scope > Select `Read Messages/View Channels` and `Send Messages` > Copy the URL and open it in your browser

## Setup project

1. Clone the repository: `git clone`
2. Install dependencies: `npm install` or `yarn install`
3. Rename `.env.example` to `.env` and fill it with the token and client ID from your Discord bot
4. Run the bot: `npm start` or `yarn start`
5. Try command `/gamedeals` in your Discord server

## Commands

- `/gamedeals` - Get the latest 5 posts from r/GameDeals

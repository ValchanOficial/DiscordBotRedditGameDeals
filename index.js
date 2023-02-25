import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import dotenv from "dotenv";
import Commands from "./commands.js";
import getGameDealsPosts from "./gamedeals.js";
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => console.log("Bot is ready!"));

client.login(process.env.TOKEN);

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "gamedeals") {
    const posts = await getGameDealsPosts();
    if (!posts) {
      await interaction.reply("There are no new posts at the moment.");
      return;
    }
    for (const post of posts) {
      await interaction.channel.send({
        content: `${post.title}\n${post.url}`,
      });
    }
  }
  return;
});

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: Commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

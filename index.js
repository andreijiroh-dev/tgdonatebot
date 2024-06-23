import {Telegraf} from "telegraf";
import express from "express";
import botCommands from "./handlers/commands.js"
import { configDotenv } from "dotenv";

configDotenv({
    debug: process.env.DEBUG ? true : false
})

const app = express()

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
app.use(await bot.createWebhook({
    domain: process.env.TELEGRAM_BOT_WEBHOOK_DOMAIN,
    path: "/api/tgbot"
}));

bot.start(async (ctx) =>{ return botCommands.start(ctx)})

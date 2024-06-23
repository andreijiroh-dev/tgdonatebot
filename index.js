import {Telegraf} from "telegraf";
import botCommands from "./handlers/commands.js"
import donationFlow from "./handlers/donationFlow.js";
import { configDotenv } from "dotenv";
import { commands } from "./lib/constants.js";

configDotenv({
    debug: process.env.DEBUG ? true : false
})

if (!process.env.TELEGRAM_BOT_TOKEN) throw new Error('Missing Telegram bot token');
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11")

bot.use((ctx, next) => {
  const start = Date.now();
  return next().then(() => {
    const ms = Date.now() - start;
    console.log(`response time ${ms} for update ${ctx.updateType}`);
  });
});

bot.telegram.setMyCommands(commands)

bot.start(async (ctx) => {
  switch (ctx.payload) {
    case "donate":
      return donationFlow.startHere(ctx)
    case "donate_50xtr":
      return donationFlow.generateInvoice(ctx, 50)
    default:
      return botCommands.start(ctx)
  }
})

bot.command("donate", async (ctx) => { return donationFlow.startHere(ctx)})

bot.action("home", async (ctx) => { return botCommands.start(ctx)})
bot.action("donate", async (ctx) => { return donationFlow.startHere(ctx)})

// TG Stars donation spaghetti code
bot.action("50_XTR", async (ctx) => { return donationFlow.generateInvoice(ctx, 50)})
bot.action("75_XTR", async (ctx) => { return donationFlow.generateInvoice(ctx, 70)})
bot.action("100_XTR", async (ctx) => { return donationFlow.generateInvoice(ctx, 100)})
bot.action("150_XTR", async (ctx) => { return donationFlow.generateInvoice(ctx, 150)})
bot.action("250_XTR", async (ctx) => { return donationFlow.generateInvoice(ctx, 250)})
bot.action("350_XTR", async (ctx) => { return donationFlow.generateInvoice(ctx, 350)})
bot.action("500_XTR", async (ctx) => { return donationFlow.generateInvoice(ctx, 500)})
bot.action("750_XTR", async (ctx) => { return donationFlow.generateInvoice(ctx, 750)})
bot.action("1000_XTR", async (ctx) => { return donationFlow.generateInvoice(ctx, 1000)})


bot.on('pre_checkout_query', (ctx) => {
    const preCheckoutQuery = ctx.update.pre_checkout_query;
    console.log(preCheckoutQuery);
    
    ctx
      .answerPreCheckoutQuery(true)
      .then(() => {
        console.log('Payment approved');
      })
      .catch((error) => {
        console.log('Failed to approve payment:', error);
      });
  });

bot.launch();

process.once("SIGINT", () => {
  if (process.env.NODE_ENV == "development") {
    bot.telegram.deleteMyCommands()
  }
  bot.stop("SIGINT")
});
process.once("SIGTERM", () => {
  if (process.env.NODE_ENV == "development") {
    bot.telegram.deleteMyCommands()
  }
  bot.stop("SIGTERM")
});

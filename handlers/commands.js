import { Markup } from "telegraf"
import { startMsg, sponsorsWebsiteUrl, homepage } from "../lib/strings.js"

export default {
    async start(ctx) {
        return await ctx.replyWithMarkdownV2(
            startMsg,
            Markup.inlineKeyboard([
                Markup.button.url("Learn more on website", sponsorsWebsiteUrl),
                Markup.button.url("Run your own bot", homepage)
            ])
        )
    }
}
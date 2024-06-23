import { startMsg, mainMenu } from "../lib/constants.js"

export default {
    async start(ctx) {
        if (ctx.updateType == "callback_query") {
            return await ctx.editMessageText(
                startMsg,
                {
                    parse_mode: "MarkdownV2",
                    ...mainMenu
                }
            )
        } else {
            return await ctx.replyWithMarkdownV2(
                startMsg,
                mainMenu
            )
        }
    }
}
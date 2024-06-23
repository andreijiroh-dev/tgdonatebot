import { donationOptions, donationStep1 } from "../lib/constants.js"

/* @typedef import("telegraf").Context Context */

export default {
    async startHere(ctx) {
        if (ctx.updateType == "callback_query") {
            await ctx.answerCbQuery()
            return await ctx.editMessageText(
                donationStep1, {
                    parse_mode: "MarkdownV2",
                    ...donationOptions
                }
            )
        } else {
            return await ctx.replyWithMarkdownV2(
                donationStep1,
                donationOptions
            )
        }
    },

    async generateInvoice(ctx, amount) {
        const invoiceId = crypto.randomUUID()

        if (ctx.updateType == "callback_query") {
            await ctx.answerCbQuery()
        }

        return await ctx.sendInvoice({
            title: "Tip for Andrei Jiroh",
            description: "Support Andrei Jiroh's work by using your Telegram Stars. Non-refundable once paid.",
            payload: invoiceId,
            provider_token: "",
            currency: "XTR",
            prices: [{
                label: "To tip jar",
                amount: amount
            }],
            start_parameter: `donate_${amount}xtr`
        })
    },

    async thankYou(ctx) {
        return ctx.sendMessage("Thank you!")
    }
}
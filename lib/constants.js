import { Markup } from "telegraf"

export const startMsg = `\
*Hello there\\!*

I am an Telegram bot that handle donations for @ajhalili2006's \
open\\-source and writing work, as well as managing monthly and annual \
sponsorship \\(and its perks\\)\\.

If you want me to use this bot for your own sponsorship program, \
you may need to fork the codebase that powers this bot under the \
terms of AGPL license\\.

To get started, tap the *Donate to the tipjar* button \
below or use /donate command\\.
`

const donationStep1 = `\


`

export const donationOptions = Markup.inlineKeyboard([
    [
        Markup.button.callback("50", "50_XTR"),
        Markup.button.callback("75", "75_XTR")
    ]
])

// LINKS
export const sponsorsWebsiteUrl = "https://sponsors.andreijiroh.xyz"
export const homepage = "https://mau.dev/andreijiroh-dev/tgdonatebot"
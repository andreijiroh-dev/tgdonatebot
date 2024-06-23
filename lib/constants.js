import { Markup } from "telegraf"


// LINKS
export const sponsorsWebsiteUrl = "https://sponsors.andreijiroh.xyz"
export const homepage = "https://mau.dev/andreijiroh-dev/tgdonatebot"

export const commands = [
    {
      command: "start",
      description: "main menu"
    },
    {
      command: "donate",
      description: "donate some money"
    },
    {
      command: "help",
      description: "show bot help"
    },
    {
      command: "terms",
      description: "legalese"
    }
  ]

// start command
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
export const mainMenu = Markup.inlineKeyboard([
  [
      Markup.button.url("Learn more", sponsorsWebsiteUrl),
  ],
  [
      Markup.button.callback("Donate to the tipjar", "donate"),
  ],
  [
      Markup.button.callback("Manage your sponsorship", "manage_sponsorship")
  ],
  [
      Markup.button.url("Run your own bot", homepage),
  ]
])

// donate button
export const donationStep1 = `\
*Choose how you donate within the Telegram app*

Select the amount of Telegram Stars listed below to chip in \
to @ajhalili2006's tip jar via this bot\\. Alternatively, \
select *Show alternative ways* \\(or via /more\\_donate\\_options\\) \
to get even more ways to donate\\.
`
export const donationOptions = Markup.inlineKeyboard([
    [
        Markup.button.callback("50", "50_XTR"),
        Markup.button.callback("75", "75_XTR"),
        Markup.button.callback("100", "100_XTR")
    ],
    [
        Markup.button.callback("150", "150_XTR"),
        Markup.button.callback("250", "250_XTR"),
        Markup.button.callback("350", "350_XTR")
    ],
    [
        Markup.button.callback("500", "500_XTR"),
        Markup.button.callback("750", "750_XTR"),
        Markup.button.callback("1000", "1000_XTR")
    ],
    [
        Markup.button.callback("Show alternative options", "showMoreOptions_donations")
    ],
    [
        Markup.button.callback("Return to homepage", "home")
    ]
])

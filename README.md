# Sources for @ajhalili2006's Tip Jar-as-Telegram Bot

[![fork with dotenv-vault](https://badge.dotenv.org/fork.svg?r=1)](https://vault.dotenv.org/project/vlt_fa8127cf9f372fb2c549d8acf7cb06673919d5d9662a8189b133eacb941f70b0/example)

A minimal Telegram bot for accepting donations using Telegram Stars. You can try donating some of your Stars at <https://t.me/ajhalili2006_sponsorbot>.

## Feature set

* `export default`-styled handlers code (Cloudflare Workers users may feel familiar to this)
* Batteries included:
  * `dotenv-vault` for SecretOps without the binaries.
  * `jsconfig.json` for type-checking and IntelliSense, powered by TypeScript.

## TODO features

* Presistence via Supabase/PostREST for tracking donation statuses.
* Handle crypto donations within app instead of redirecting elsewhere.
* Let individuals and corporate sponsors manage their monthly/annual sponsorship, similar to [Mastodon](https://sponsor.joinmastodon.org/).

## License

AGPL-3.0

**Note to forks**: Before you use this source code, please make sure to update links and references to point into your own.

<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/instabot-core/main/.github/images/favicon512x512-instabot-core.png" align="center" alt=":package: instabot-core" />
 <h2 align="center">:package: instabot-core</h2>
 <p align="center">🤖 Instagram comment generator robot</p>
</p>

  <p align="center">
    <a href="https://github.com/hebertcisco/instabot-core/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/instabot-core?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/instabot-core/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/instabot-core?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/instabot-core">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/instabot-core?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/instabot-core">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/instabot-core?color=336791&label=Total%20downloads" />
    </a>
  <a href="https://github.com/hebertcisco/instabot-core">
      <img alt="GitHub release" src="https://img.shields.io/github/release/hebertcisco/instabot-core.svg" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/instabot-core/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/instabot-core/issues/new/choose">Request Feature</a>
  </p>
  <h3 align="center">Systems on which it has been tested.</h3>
 <p align="center">
  <a href="https://ubuntu.com/download">
      <img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white" />
    </a>
  <a href="https://www.microsoft.com/pt-br/software-download/windows10">
      <img alt="Windows" src="https://img.shields.io/badge/Windows-0078D6?style=flat&logo=windows&logoColor=white" />
    </a>
  <a href="https://alpinelinux.org/">
      <img alt="Alpine_Linux" src="https://img.shields.io/badge/Alpine_Linux-0D597F?style=flat&logo=alpine-linux&logoColor=white" />
    </a>
  </p>
<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong></strong>✨</p>


# Getting started

## Usage

# Installation

> Important! Install nodejs first in your machine: [Download nodejs](https://nodejs.org/en/download/)

Create an file `index.js`, run `npm init` on the terminal and this is the content of the `index.js`:

```mjs
import { commentService } from 'instabot-core';
import * as dotenv from 'dotenv';

dotenv.config();

const { IG_LINK, PHRASE_AUTHOR, IG_USERNAME, IG_PASSWORD } = process.env;


function* commentForever() {
    yield commentService({
        link: IG_LINK,
        author: PHRASE_AUTHOR,
        loginInstagram: IG_USERNAME,
        passwordInstagram: IG_PASSWORD,
      });
}

commentForever().next();
```
Install the dependency:

```bash
npm i instabot-core
```
or
```bash
yarn add instabot-core
```

Now run the command:
```bash
node index.js
```

## Cloning the repo
> Clone this repository: `git clone https://github.com/hebertcisco/instabot-core`

### Open the directory and run the script line:

```bash
cd instabot-core && npm i
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

BTC WALLET: 3P4oVEdSP8CPdFZZwS2dboRyLFXLSTE7Gq



## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.

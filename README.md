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
    <br />
    <br />
  <a href="https://github.com/hebertcisco/instabot-core/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/instabot-core/issues/new/choose">Request Feature</a>
  </p>

<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong></strong>✨</p>


# Getting started

## Usage

# Installation

> Important! Install nodejs first in your machine: [Download nodejs](https://nodejs.org/en/download/)

Create an file `index.js`, run `npm init` on the terminal and this is the content of the `index.js`:

```js
const { commentService } = require('instabot-core');

const commentForever = async () => {
    while (true) {
        await commentService(
            'https://www.instagram.com/p/pOstL1nk/',
            'Jesus Cristo',
            'yourLogin',
            'yourStrongPass'
        );
    }
};

try {
    commentForever();
} catch {
    commentForever();
}

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

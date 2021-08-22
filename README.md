<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hotbrainstech/instabot-core/main/.github/images/favicon512x512-instabot-core.png" align="center" alt=":package: instabot-core" />
 <h2 align="center">:package: instabot-core</h2>
 <p align="center">🤖 Instagram comment generator robot</p>
</p>

  <p align="center">
    <a href="https://github.com/hotbrainstech/instabot-core/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hotbrainstech/instabot-core?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hotbrainstech/instabot-core/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hotbrainstech/instabot-core?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hotbrainstech/instabot-core">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/instabot-core?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hotbrainstech/instabot-core">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/instabot-core?color=336791&label=Total%20downloads" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hotbrainstech/instabot-core/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hotbrainstech/instabot-core/issues/new/choose">Request Feature</a>
  </p>

<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong></strong>✨</p>


# Getting started

## Installation

```bash
npm i instabot-core
```
or
```bash
yarn add instabot-core
```

## Usage
```ts
import instabot from 'instabot-core';

const commentForever = async () => {
  while (true) {
    const configure = {
      link: 'https://www.instagram.com/p/pOstL1nk/',
      quaintTagInstagramProfiles: 2,
      AUTHOR: 'fulano',
      LOGIN_INSTAGRAM: 'yourLogin',
      PASSWORD_INSTAGRAM: 'yourStrongPass'
    };
    await instabot.comment(configure);
  }
};

try {
  commentForever();
} catch {
  commentForever();
}

```
## Cloning the repo
> Clone this repository: `git clone https://github.com/hotbrainstech/instabot-core`

### Open the directory and run the script line:

```bash
cd instabot-core && npm i
```
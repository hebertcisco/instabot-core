import { commentService } from 'instabot-core';

commentService({
        link: process.env.IG_LINK,
        author: process.env.PHRASE_AUTHOR,
        loginInstagram: process.env.IG_USERNAME,
        passwordInstagram: process.env.IG_PASSWORD,
})
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

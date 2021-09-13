import { commentService } from './core/comment.service';
import { getEmoji } from './services/getEmoji';
import { randomInt, sleep } from './utils';

export { commentService } from './core/comment.service';
export * as comment from './core/comment.service';
export * as core from './core/comment.service';
export { getEmoji } from './services/getEmoji';
export { randomInt, sleep } from './utils';

const instabot = {
  comment: commentService,
  getEmoji: getEmoji,
  randomInt: randomInt,
  sleep: sleep
}
export default instabot

import { randomInt, sleep } from '../utils';
import instabot from '../index';

describe('test utils', () => {
  it('randomInt Works', () => {
    const int = randomInt(0, 0);
    const expectInt = 0;
    expect(int).toBe(expectInt);
  });

  it('sleep Works', async () => {
    const runSleep = await sleep(1);
    expect(runSleep).toBe(true);
  });
  it('getEmoji Works', async () => {
    const getEmoji = await instabot.getEmoji(0);
    const expectedEmoji = '😬';
    expect(getEmoji).toBe(expectedEmoji);
  });
});

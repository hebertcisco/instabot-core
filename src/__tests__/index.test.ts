import { randomInt } from '../utils';
import instabot from '../index';

it('randomInt Works', () => {
  expect(randomInt(0, 1)).toBe(0);
});

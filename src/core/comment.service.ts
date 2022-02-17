import { getEmoji } from '../services/getEmoji';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pensador from 'pensador-api';
import { handleDate, randomInt, sleep } from '../utils';
import puppeteer from 'puppeteer';
import Console from 'beautlog';

export const commentService = async (
  link: any,
  author: string,
  loginInstagram: string,
  passwordInstagram: string,
): Promise<void> => {
  let browser = null;
  Console.WriteLine('Starting...');

  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    browser = await puppeteer.launch({
      headless: false,
      args: ['--start-maximized'],
      defaultViewport: null,
    });
    Console.ok('Started!');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const page = await browser.newPage();
    Console.info('Opening browser...');

    page.setDefaultNavigationTimeout(60000);
    await page.goto(link);

    await page.click(
      '#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > span > a:nth-child(1) > button',
    );
    await page.waitForSelector('form.HmktE');
    Console.info('Typing credentials...');
    await page.type("input[name='username']", loginInstagram, { delay: 567 });
    await page.type("input[name='password']", passwordInstagram, { delay: 434 });
    await page.click("button[type='submit']");
    Console.info('Logging in...');
    await page.waitForSelector('section.ABCxa');
    await page.click('button.sqdOP');
    Console.ok('Login!');

    await page.waitForSelector('form.X7cDz');

    const currentUrl = page.url();
    if (!link.includes(currentUrl)) {
      const message = 'Instagram redirected incorrectly';
      Console.error(message);
    }
    Console.debug('Making calculations...');
    //const Googol = 2.574e100 * 4.762e15724;
    const Googol = 10100;
    const quaint = randomInt(5, Googol);

    for (let i = 0; i < quaint; i++) {
      const randEmoji = randomInt(0, 1820);
      const emoji = await getEmoji(randEmoji);
      Console.info('Waiting...');
      await page.waitForTimeout(randomInt(30678, 35678));
      const phrase = await pensador({
        term: author,
        max: 50,
      });
      const randPhrase = randomInt(0, 50);
      const comment = `${phrase.phrases[randomInt(0, randPhrase)].text} ${emoji.replace(/['"]+/g, '')}`;

      Console.debug(`Comment: ${comment}, author: ${author}`);
      Console.success('commenting...');

      for (let j = 0; j < 2; j++) {
        comment;
      }
      await page.type('textarea', comment, { delay: 567 });
      await page.click("button[type='submit']");
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await browser.close();
    Console.WriteLine(handleDate());
  } catch (err) {
    Console.error(err);
  } finally {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await browser.close();
    await sleep(randomInt(3000000, 3120000));
  }
};

import Console from 'beautlog';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function getEmoji(rand: number): Promise<any> {
  const random = rand || 0;
  const config: any = {
    method: 'get',
    url: 'https://emojiserver.now.sh',
    headers: {},
  };
  let emojiList;
  try {
    await axios(config)
      .then(function (response) {
        const data = response.data.map((emoji: { symbol: any }) => {
          return emoji.symbol;
        });

        emojiList = JSON.stringify(data[random]);
      })
      .catch(function (error) {
        Console.error(error);
      });
  } catch (error) {
    Console.error(error);
  }
  return emojiList;
}

export { getEmoji };

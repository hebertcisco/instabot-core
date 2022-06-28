import Console from 'beautlog';
import { request } from 'undici';

type EmojiList = {
  symbol: string;
};
export async function getEmoji(rand: number): Promise<string> {
  const random = rand || 0;
  try {
    const response = await request('https://emojiserver.vercel.app');
    const { statusCode } = response;
    void statusCode;
    const body: EmojiList[] = await response.body.json();
    const data = body.map((emoji: EmojiList) => {
      return emoji.symbol.toString();
    });
    return data[random];
  } catch (error) {
    Console.error(error);
    throw error;
  }
}

export default getEmoji;

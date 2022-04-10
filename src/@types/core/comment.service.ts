import puppeteer from 'puppeteer';

export type TypeCommentArgs = {
  link: string;
  author: string;
  loginInstagram: string;
  passwordInstagram: string;
};
export type TypeCommentService = (args: TypeCommentArgs) => void;
const TypeOfBrowser = puppeteer.launch;
export type Browser = typeof TypeOfBrowser;

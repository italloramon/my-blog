import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';


export const config: ScullyConfig = {
  projectRoot: "./src",
  puppeteerLaunchOptions: {args: ['--no-sandbox', '--disable-setuid--sandbox']},
  projectName: "my-blog",
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },},
};

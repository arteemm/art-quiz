import './sass/style.scss';
import { Utils } from './utils';
import { MainPage } from '../src/pages';
// import { Winners } from 'Winners//';
// import { Error404 } from 'Error404//';

import { Header, Footer } from '../src/components';

const mainPageInstance = new MainPage();
// const winnersInstance = new Winners();
// const error404Instance = new Error404();

const headerInstance = new Header();
const footerInstance = new Footer();

enum routes {
  home = '/',
  quiz = '/quiz',
}

(function createPage(): void {
  const header = document.createElement('header') as HTMLElement;
  const main = document.createElement('main') as HTMLElement;
  const footer = document.createElement('footer') as HTMLElement;

  header.classList.add('header');
  footer.classList.add('footer');

  const body = null || (document.querySelector('body') as HTMLElement);
  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
})();

const router = async () => {
  const header = null || (document.querySelector('.header') as HTMLElement);
  const content = null || (document.querySelector('main') as HTMLElement);
  const footer = null || (document.querySelector('.footer') as HTMLElement);

  header.innerHTML = await headerInstance.render();
  await headerInstance.after_render();

  footer.innerHTML = await footerInstance.render();
  await footerInstance.after_render();

  const request = Utils.parseRequestURL();

  const parsedURL: string =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

  let page;

  switch (parsedURL) {
    case routes.home:
      page = mainPageInstance;
      break;
    // case routes.quiz:
    //   page = winnersInstance;
    //   break;
    // default:
    //   page = error404Instance;
  }

  if (typeof page !== 'undefined') {
    content.innerHTML = await page.render();
    await page.after_render();
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

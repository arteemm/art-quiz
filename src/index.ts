import './sass/style.scss';
import { Utils } from './utils';
import { MainPage } from '../src/pages';
// import { Winners } from 'Winners//';
// import { Error404 } from 'Error404//';

import { Header, Footer } from '../src/components';

const main = new MainPage().render();
// const winnersInstance = new Winners();
// const error404Instance = new Error404();

const header = new Header().render();
const footer = new Footer().render();

enum routes {
  home = '/',
  quiz = '/quiz',
}

(function createPage(): void {
  const body = null || (document.querySelector('body') as HTMLElement);
  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
})();

const router = async () => {
  const request = Utils.parseRequestURL();

  const parsedURL: string =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

  let page;

  switch (parsedURL) {
    case routes.home:
      page = main;
      break;
    // case routes.quiz:
    //   page = winnersInstance;
    //   break;
    // default:
    //   page = error404Instance;
  }

  if (typeof page !== 'undefined') {
    await page;
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

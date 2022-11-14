import './sass/style.scss';
import { Utils } from './utils';
import { Quiz, ErrorPage } from '../src/pages';

import { Header, Footer } from '../src/components';

const pageInstance = new Quiz();
const main = pageInstance.render();
const error404Instance = new ErrorPage().render();

const header = new Header().render();
const footer = new Footer().render();

enum routes {
  home = '/',
  quiz = '/quiz',
}

const router = async () => {
  const request = Utils.parseRequestURL();

  const parsedURL: string =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

  let page = error404Instance;

  switch (parsedURL) {
    case routes.home:
      page = main;
      break;
    case routes.quiz:
      page = pageInstance.renderSelectCategories();
      break;
    default:
      page = error404Instance;
  }

  const body = document.querySelector('body') as HTMLElement;
  body.innerHTML = '';
  body.append(header, page, footer);
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

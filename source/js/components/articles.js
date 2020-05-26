'use strict';

import {makeElement} from './utils';
import {load} from './backend';

const NUMBER_OF_ARTICLES = 10;
const articlesParent = document.body.querySelector(`.guides__active-articles`);
const showArticlesButton = document.body.querySelector(`.guides__button--show`);
const hideArticlesButton = document.body.querySelector(`.guides__button--hide`);

const article = (title, text, id) => {
  return `<div class="guides__active-article"><h5>${title}</h5><p>${text}</p><span>by user: ${id}</span></div>`
}

const onSuccessHandler = (response) => {
  const rendered = [];

  Array.from(response).forEach((it, index) => {
    if(it.id <= NUMBER_OF_ARTICLES) {
      rendered.push(it);
    }
  });

  rendered.reverse().forEach((it) => {
    articlesParent.append(makeElement(article(it.title, it.body, it.id)));
  })
}

const onErrorHandler = (errorMessage) => {
  articlesParent.append(makeElement(article(`ERROR`, errorMessage, 0)));
};

const setArticlesHandlers = () => {
  showArticlesButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    load(onSuccessHandler, onErrorHandler);

    showArticlesButton.classList.add(`visually-hidden`);
    hideArticlesButton.classList.remove(`visually-hidden`);
  });

  hideArticlesButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    const articles = document.querySelectorAll(`.guides__active-article`);
    articles.forEach((article) => {
      article.remove();
    });

    showArticlesButton.classList.remove(`visually-hidden`);
    hideArticlesButton.classList.add(`visually-hidden`);
  });
};

export {setArticlesHandlers}

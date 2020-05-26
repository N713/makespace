'use strict';

const URL = `https://jsonplaceholder.typicode.com/posts/`;

const load = (onSuccess, onError) => {
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      onSuccess(xhr.response);
    } else {
      onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Произошла ошибка соединения');
  });
  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 10000;

  xhr.open('GET', URL);
  xhr.send();
};

const onSuccessHandler = (response) => {
  console.log(response);
}

const onErrorHandler = (errorMessage) => {
  const node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';
  node.style.height = '30px';
  node.style.borderBottom = '4px solid yellow';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};

load(onSuccessHandler, onErrorHandler);


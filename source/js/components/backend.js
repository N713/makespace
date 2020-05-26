`use strict`;

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

export {load}

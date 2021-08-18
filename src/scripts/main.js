'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;
  message.style.boxSizing = 'content-box';
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  message.insertAdjacentHTML('afterbegin', `
    <h2 class="title">${title}</h2>
    <p>${description.replace('\n ', '<br>')}</p>
  `);

  setTimeout(() => message.remove(), 2000);

  return document.body.append(message);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');

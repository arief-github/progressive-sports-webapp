import 'regenerator-runtime';
import App from './views/app';
import '../styles/main.css';
import 'lazysizes';
import './views/components/custom-loading'
import './views/components/fab-darkmode';
import './views/components/message-error'
import './views/components/message-null'
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './utils/config';
import Toastify from 'toastify-js'

const app = new App({
  header: document.querySelector('header'),
  main: document.querySelector('main'),
  footer: document.querySelector('footer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    app.renderPage();
    navigator.serviceWorker.register('/sw.js');
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
  });
}

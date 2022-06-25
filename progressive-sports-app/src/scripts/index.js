import 'regenerator-runtime';
import App from './views/app';
import '../styles/main.css';
import 'lazysizes';
import './views/components/custom-loading'
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

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
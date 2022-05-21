import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import footer from './components/footer'
import header from './components/header'
class App {
  constructor({ header, main, footer }){
    this.header = header;
    this.main = main;
    this.footer = footer;
    this.initialAppShell();
  }

  initialAppShell() {
    this.header.innerHTML = header.init();
    this.footer.innerHTML = footer.init();
    header.afterRender();
    footer.afterRender();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.main.innerHTML = await page.init();
    await page.afterRender();
  }
}

export default App;

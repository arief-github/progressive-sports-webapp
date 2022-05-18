import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import footer from './components/footer'
import header from './components/header'
class App {
  constructor({ header, main, footer }) {
    this.header = header;
    this.main = main;
    this.footer = footer;
  }

  async initialAppShell() {
    this.header.innerHTML = await header.init();
    this.footer.innerHTML = await footer.init();
  }

  async renderPage() {
    await this.initialAppShell();
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.main.innerHTML = await page.init();
    await page.afterRender();
  }
}

export default App;

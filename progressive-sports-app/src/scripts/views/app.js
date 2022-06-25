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
    await page.init()
      .then((e)=>{
        this.main.innerHTML = e;
      })
      .catch((e)=>{
        if(e.status == 0){
            this.main.innerHTML = `<message-error message="Limit Request waiting 1 minute"></message-error>`;
        }else{
          this.main.innerHTML = `<message-error message="${e.statusText}"></message-error>`;
        }
      })
    await page.afterRender();
  }
}

export default App;

import FavoritePage from '../views/pages/favoritePage';
import HomePage from '../views/pages/homePage';
import gamePage from '../views/pages/gamePage';
import clubPage from '../views/pages/clubPage';
import NewsPage from '../views/pages/newsPage';
import detailGamePage from '../views/pages/detailGamePage';
import detailLeaguePage from '../views/pages/detailLeaguePage';
import detailPlayerPage from '../views/pages/detailPlayerPage';


const routes = {
    '/': HomePage,
    '/favorite-page': FavoritePage,
    '/game-page': gamePage,
    '/news-page' : NewsPage,
    '/teams/:id': clubPage,
    '/league/:id': detailLeaguePage,
    '/matches/:id': detailGamePage,
    '/players/:id': detailPlayerPage,
};

export default routes;
import FavoritePage from '../views/pages/favoritePage';
import HomePage from '../views/pages/homePage';
import gamePage from '../views/pages/gamePage';
import clubPage from '../views/pages/clubPage';
import detailGamePage from '../views/pages/detailGamePage';

const routes = {
  '/': HomePage,
  '/favorite-page': FavoritePage,
  '/game-page' : gamePage,
  '/teams/:id': clubPage,
  '/league/:id': clubPage,
  '/matches/:id': detailGamePage,

};

export default routes;

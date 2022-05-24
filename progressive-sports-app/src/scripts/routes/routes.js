import FavoritePage from '../views/pages/favoritePage';
import HomePage from '../views/pages/homePage';
import gamePage from '../views/pages/gamePage';
import clubPage from '../views/pages/clubPage';

const routes = {
<<<<<<< Updated upstream
  '/': HomePage,
  '/favorite-page': FavoritePage,
  '/game-page' : gamePage,
  '/teams/:id': clubPage,
=======
    '/': HomePage,
    '/favorite-page': FavoritePage,
    '/game-page': gamePage,
    '/teams/:id': clubPage,
    '/league/:id': detailLeaguePage,
    '/matches/:id': detailGamePage,
>>>>>>> Stashed changes
};

export default routes;

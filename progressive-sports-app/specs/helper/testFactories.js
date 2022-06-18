// need DB and Like Button
import detailLeaguePage from '../../src/scripts/views/pages/detailLeaguePage';
import FavoriteTeamIDB from '../../src/scripts/data/favoriteTeamIDB';

const likeButtonClubPresenter = async (teams) => {
	await detailLeaguePage.init({
		likeButtonContainer : document.querySelector('.btn-favorite'),
		favoriteTeam: FavoriteTeamIDB,
		teams,
	});
}

export { likeButtonClubPresenter };


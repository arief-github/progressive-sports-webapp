import * as TestFactories from './helper/testFactories';
import FavoriteTeamIDB from '../src/scripts/data/favoriteTeamIDB';

describe("Liking Club League", () => {
    it("should show like button when club has not been liked before", async () => {
        await TestFactories.likeButtonClubPresenter({ id: 1 });

        expect(
            document.querySelector('[aria-label="like"]')
        ).toBeTruthy();
    });

    it("should not show unlike button when club has not been liked before", async () => {
        await TestFactories.likeButtonClubPresenter({ id: 1 });

        expect(
            document.querySelector('[aria-label="unlike"]')
        ).toBeFalsy();
    });
})
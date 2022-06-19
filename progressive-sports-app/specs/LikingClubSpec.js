import clubPageReal from './../src/scripts/views/pages/clubPage';
import data from './utils/data';
import { asyncHandler, sleep } from './utils/asyncHandler.js';
import FavoriteTeamIDB from './../src/scripts/data/favoriteTeamIDB';

describe("Testing Favorite", () => {
    let clubPage = clubPageReal;
    const prosesAddFavorite =async ()=>{
        clubPage.data = data;
        clubPage.colors = ['white','red'];
        document.body.innerHTML = `
        <div class="allButton w-full md:w-1/6 flex">
            <button id="addToFavorite" class="mb-auto mx-auto mt-7 w-[100px] rounded-md shadow-lg shadow text-center p-2 bg-white">
              ${(!!await FavoriteTeamIDB.getTeam(clubPage.data.id)) ? clubPage.allButton(clubPage.colors)["afterAdd"] : clubPage.allButton(clubPage.colors)["beforeAdd"]}
            </button>
        </div>`;
        clubPage.afterRender(data);
        await sleep(2000);
    } 
    
    beforeEach(async ()=>{
        await FavoriteTeamIDB.deleteTeam(data.id);
    });

    afterEach(async ()=>{
        await FavoriteTeamIDB.deleteTeam(data.id);
    })

    it("Harus Menampilkan Icon/SVG after add setelah di add favorite", async () => {        
        await FavoriteTeamIDB.putTeam(data);
        await prosesAddFavorite();
        
        expect(
            document.querySelector('.allButton #addToFavorite #afterAdd')
        ).toBeTruthy();

    });

    it("Harus Menampilkan Icon/SVG before add setelah di delete favorite", async () => {
        await FavoriteTeamIDB.deleteTeam(data.id);
        await prosesAddFavorite();
        expect(
            document.querySelector('.allButton #addToFavorite #beforeAdd')
        ).toBeTruthy();
    });

    it("Jangan Menambahkan data lagi ketika sudah di favorite kan", async () => {
        await FavoriteTeamIDB.putTeam(data);
        await FavoriteTeamIDB.putTeam(data);
        await FavoriteTeamIDB.putTeam(data);
        const team = await FavoriteTeamIDB.getAllTeams();
        expect(team.length == 1).toBeTruthy();
    });

    it("Ketika data dihapus maka data di IDB harus tidak ada", async () => {
        await FavoriteTeamIDB.putTeam(data);
        await FavoriteTeamIDB.deleteTeam(data.id)
        const team = await FavoriteTeamIDB.getTeam(data.id);
        expect(team == undefined).toBeTruthy();
    });

    xit("Harus terdapat id yang sama di IDB setelah di klik button", async () => {
        await prosesAddFavorite();
        document.querySelector('.allButton #addToFavorite').dispatchEvent(new Event('click'));
        const checkData = await FavoriteTeamIDB.getTeam(data.id);
        expect(checkData.id).toEqual(data.id);
    });

})
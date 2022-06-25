import heroImage from '../components/hero-image.js';
import header from '../components/header.js';
import footer from '../components/footer.js';
import cardsLeague from '../components/card-league';
import FootballDataApi from '../../data/footballDataApi';
import idCompetitions from '../../data/idCompetitions';


const homePage = {
    async init() {
        return `
        <a href="#league" class="skip-link translate-y-[-100%] top-0 w-full left-1/3 md:w-fit mb-4 md:mr-5 py-5 px-7 text-sm text-black font-bold uppercase border-2 border-transparent rounded hover:text-green-400 transition duration-200 focus:outline-none focus:ring focus:ring-green-500 focus:translate-y-[5%]" tabindex="1">Skip to main content &rarr;</a>
        <div id="hero-image"></div>
        <div class="flex dark:bg-gray-800">
            <div class="w-2/4 ml-6">
                <h1 class="text-xl font-bold  md:text-2xl md:font-semibold ">LEAGUES</h1>
            </div>
            <div class="search-league mr-6 flex w-2/4">
                <div class="ml-auto flex items-center border border-gray-300 w-4/4 shadow-inner rounded-md ">
                    <button id="btn-search-leagues" class="hover:shadow-inner m-auto flex items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <input type="text" id="search-league" class="w-5/6 dark:bg-gray-800 text-xl sm:ml-auto hidden focus:outline-none" placeholder="Search leagues">
                </div>
            </div>
        </div>
        <div id="league" class="league-container dark:bg-gray-800 w-full h-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <custom-loading class="col-span-full"></custom-loading>
        </div>
        
        `;
    },
    async afterRender() {
        document.getElementById('hero-image').innerHTML = heroImage;
        await this.renderCompetitions();
        await this.searchingForLeague();
        await this.showingResults();
    },
    async renderCompetitions() {
        const leaguesCardContainer = document.querySelector('.league-container');
        const footballDataApi = new FootballDataApi();
        await footballDataApi.getAllCompetitions()
            .then((value) => {
                $("custom-loading").remove()
                let leagues = Array();
                idCompetitions.forEach((competition) => {
                    leagues.push(value.competitions.find(value => value.id == competition.id));
                })
                leagues.forEach((item) => {
                    leaguesCardContainer.innerHTML += cardsLeague({
                        idLeague: item.id,
                        emblemUrl: item.emblemUrl,
                        leagueName: item.name,
                        leagueAreaName: item.area.name,
                        currentSeasonStartDate: item.currentSeason.startDate,
                        currentSeasonEndDate: item.currentSeason.endDate,
                    })
                })
            }).catch((e) => {
                if (e.status == 0) {
                    leaguesCardContainer.innerHTML = `<message-error message="Limit Request waiting 1 minute" class="col-span-full"></message-error>`;
                } else {
                    leaguesCardContainer.innerHTML = `<message-error message="${e.statusText}"></message-error>`;
                }
            })
    },
    async searchingForLeague() {
        $('#search-league').on('keyup', () => {
            let value = $('#search-league').val();
            let cardsLeague = [...$('.league-container .card-league')];
            cardsLeague.filter((item) => {
                let listCards = item.querySelector('.side-mid .description h1');
                if (listCards.innerText.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    item.classList.add('inline');
                    item.classList.remove('hidden');

                } else {
                    item.classList.add('hidden');
                    item.classList.remove('inline');

                }
            })
        })
    },
    async showingResults() {
        $('#btn-search-leagues').on('click', () => {
            $('#search-league').toggleClass('hidden');
        })
    },
}


export default homePage;
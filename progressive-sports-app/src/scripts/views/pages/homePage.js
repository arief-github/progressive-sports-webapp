import heroImage from '../components/hero-image.js';
import header from '../components/header.js';
import footer from '../components/footer.js';
import cardsLeague from '../components/card-league';
import FootballDataApi from '../../data/footballDataApi';
import idCompetitions from '../../data/idCompetitions';


const homePage = {
    async init() {
        return `
		<div id="hero-image"></div>
		<h1 class="text-center mt-2 text-2xl font-bold underline  md:text-xl md:font-semibold ">LEAGUES</h1>
		<br>
		<div class="search-league sm:ml-auto mr-6 flex w-2/4">
						<div class="ml-auto flex items-center border border-gray-300 w-4/4 sm:2/4 shadow-inner rounded-md ">
							<button id="btn-search-leagues" class="hover:shadow-inner m-auto flex items-center p-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</button>
							<input type="text" id="search-league" class="w-5/6  text-xl sm:ml-auto hidden focus:outline-none" placeholder="Search leagues">
						</div>
		</div>
		<div id="league" class="league-container  w-full h-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
            }).catch((err) => console.error(err))
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
import heroImage from '../components/hero-image.js';
import header from '../components/header.js';
import footer from '../components/footer.js';

const homePage = {
    async init() {
        return `
		<div id="hero-image"></div>
		<h1 class="text-center mt-2 text-2xl font-bold underline  md:text-xl md:font-semibold ">LEAGUES</h1>
		<br>
<<<<<<< Updated upstream
		<div class="container flex justify-start items-strecth flex-wrap">
			  <div class="card-league mb-6">
			     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			</div>
			<h1 class="text-center mt-2 text-2xl font-bold underline md:text-xl md:font-semibold ">TOURNAMENT</h1>
		<div class="container flex justify-start items-strecth flex-wrap">
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
=======
		<div class="league-container  w-full h-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
>>>>>>> Stashed changes
		</div>
		`;
    }, 
    async afterRender() {
        document.getElementById('hero-image').innerHTML = heroImage;
<<<<<<< Updated upstream
=======

        await this.renderCompetitions();
    },
    async renderCompetitions() {
        let competitionsHTML = '';
        const footballDataApi = new FootballDataApi();
        await footballDataApi.getAllCompetitions()
            .then((value) => {
            	let leagues = Array();
            	idCompetitions.forEach((competition)=>{
            		leagues.push(value.competitions.find(e => e.id == competition.id));
            	})
                leagues.forEach((item) => {
                    competitionsHTML +=
                        `
                          <div id="${item.id}" class="card-league w-full h-[400px] flex flex-col bg-[#f2f2f2] rounded-[8%] shadow-lg m-auto">
							  <div class="side-top w-full h-3/6 max-h-[50%] min-h-[50%] flex items-center bg-white p-4">
							    <img class="mx-auto h-full" src="${item.emblemUrl}" alt="picture team">
							  </div>
							  <div class="side-mid flex pt-2 px-4 h-2/6 w-full items-center">
								  <div class="description min-w-[85%] mr-4">
								  	<h1 class="truncate text-2xl font-semibold">${item.name}</h1>
								  	<h2 class="truncate text-lg mt-[2px] text-gray-700">${item.area.name}</h2>
								  	<h3 class="truncate text-md mt-[2px] text-gray-700">${item.currentSeason.startDate} ${item.currentSeason.endDate}</h3>
								  </div>
							  </div>
							  <div class="side-bottom w-full h-1/6 mb-2 flex justify-end">
							  		<button class="btn-favorite rounded-[15%] w-[30%] h-5/6 bg-[#f9f9f9]  shadow-md group hover:shadow-inner">
				             <svg class=" m-auto h-5 w-5 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="13" y1="20" x2="20" y2="13" />  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7" /></svg>
									</button>
							  </div>
		  					</div>

						`
						;
                })

            }).catch((err) => console.error(err))
        document.querySelector('.league-container').innerHTML = competitionsHTML;
>>>>>>> Stashed changes
    }
}


export default homePage;
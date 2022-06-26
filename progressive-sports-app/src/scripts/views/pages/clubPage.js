import UrlParser from '../../routes/url-parser';
import FootballDataApi from '../../data/footballDataApi';
import FavoriteTeamIDB from '../../data/favoriteTeamIDB';
import Toastify from 'toastify-js'

const { toast } = require('tailwind-toast');

const clubPage = {

    async init() {
        let html;
        this.data = await this.getData();
        this.activeCompt = this.renderCompetitions({ data: this.data })
        this.colors = this.addColorsTeams(this.data.clubColors.split(" / "));
        html = await this.createHTML({
            value: this.data,
            colors: this.colors,
            activeComptData: this.activeCompt,
        });
        return html;
    },

    async getData() {
        const footballDataApi = new FootballDataApi();
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        return await footballDataApi.getTeams({ id: url.id });
    },

    async createHTML({ value, colors, activeComptData }) {
        return `
			<div class="w-full h-auto bg-white dark:bg-gray-800">
				<div class="hero-image w-full h-[300px] relative bg-gradient-to-r from-black via-white to-green-500 py-8 flex"
					style = "
						--tw-gradient-stops: ${colors[0]},${colors[1]},${colors[2] || colors[0] };">
					<img class="lazyload fade-in m-auto h-full" data-src="${value.crestUrl || '?'}"></img>
				</div>
				<div class="flex flex-col md:flex-row w-full h-auto">
					<div class="detail flex flex-col w-full md:w-5/6 h-full">
						<div class="flex p-8">
							<h1 class="mr-4 font-bold text-3xl">${value.shortName || '?'}</h1>
							<h3 class="mt-auto text-md">${value.name || '?'}</h3>
						</div>
						<div class="flex ml-8 my-4">
							<h2 class="w-1/4 mr-4 font-semibold text-lg">Stadion</h2>
							<h2 class="mt-auto  font-semibold text-xs md:text-md">${value.venue || '?'}</h2>
						</div>
						<div class="flex ml-8 my-4">
							<h2 class="w-1/4 mr-4 font-semibold text-xs md:text-md">Email</h2>
							<h2 class="mt-auto  font-semibold text-xs md:text-md">${value.email || '?'}</h2>
						</div>
						<div class="flex ml-8 my-4">
							<h2 class="w-1/4 mr-4 font-semibold text-xs md:text-md">Address</h2>
							<h2 class="mt-auto  font-semibold text-xs md:text-md">${value.address || '?'}</h2>
						</div>
						<div class="flex ml-8 my-4">
							<h2 class="w-1/4 mr-4 font-semibold text-xs md:text-md">Phone</h2>
							<h2 class="mt-auto  font-semibold text-xs md:text-md">${value.phone || '?'}</h2>
						</div>
						<div class="flex ml-8 my-4">
							<h2 class="w-1/4 mr-4 font-semibold text-xs md:text-md">Active Competitions</h2>
							<h2 class="mt-auto  font-semibold text-xs md:text-md">${activeComptData || '?'}</h2>
						</div>
					</div>
					<div class="allButton w-full md:w-1/6 flex">
						<button id="addToFavorite" class="mb-auto mx-auto mt-7 w-[100px] rounded-md shadow-lg shadow text-center p-2 bg-white">
							${(!!await FavoriteTeamIDB.getTeam(value.id)) ? this.allButton(colors)["afterAdd"] : this.allButton(colors)["beforeAdd"]}
						</button>
						<a href="${value.website}" rel="noopener noreferrer" target="_blank" class="mb-auto mx-auto mt-7 w-[100px] rounded-md shadow-lg shadow text-center p-2 bg-white">
							<svg xmlns="http://www.w3.org/2000/svg" style="color:${(colors[0] == "white")? colors[1] : colors[0]}" class=" m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
							</svg>	
						</a>
					</div>
				</div>
				<div class="new-bar w-full h-8 flex my-4">
					<div style="background-color : ${colors[0]}" class="w-2/6 shadow-gray-400 shadow-inner"></div>
					<div style="background-color : ${colors[1]}" class="w-2/6 shadow-gray-400 shadow-inner mx-10"></div>
					<div style="background-color : ${colors[2] || colors[0]}" class="w-2/6 shadow-gray-400 shadow-inner"></div>
				</div>
				<div class="squad flex flex-col">
					<h2 class="font-semibold text-2xl mx-auto">Squad</h2>
					<div class="squad-team h-full mt-5 mb-5 grid place-items-center">
					</div>
				</div>
			</div>`
    },
    renderCompetitions({ data }) {
        let activeCompetitions = [];

        data.activeCompetitions.forEach(function(activeComp) {
            activeCompetitions.push(activeComp.name);
        });
        if (activeCompetitions.length === 0) {
            activeCompetitions.push("None");
        } else {
            activeCompetitions = activeCompetitions.join(", ");
        }

        return activeCompetitions;
    },
    allButton(colors) {
        const buttons = {
            "afterAdd": `<svg xmlns="http://www.w3.org/2000/svg" id="afterAdd" style="color:${(colors[0] == "white")? colors[1] : colors[0]}" class=" m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
						   </svg>`,
            "beforeAdd": `<svg xmlns="http://www.w3.org/2000/svg" id="beforeAdd" style="color:${(colors[0] == "white")? colors[1] : colors[0]}" class=" m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
						  </svg>`
        };
        return buttons;
    },
    itemSquad(e) {
        return `
			   <div class="w-6/12 mx-auto rounded border">
			    <div class="bg-white dark:bg-gray-800 p-1 shadow-lg">
			        <div class="transition hover:bg-indigo-50 dark:bg-gray-800">
			        <!-- header -->
			        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-9">
			            <i class="fas fa-info"></i>
			            <h3>${e.name || '?'}</h3>
			        </div>
			        <!-- Content -->
			        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
			        	<table class="table-auto">
						  <thead>
						    <tr>
						    </tr>
						  </thead>
						  <tbody class ="border-0">
						    <tr>
						      <td>Name Player</td>
						      <td>${e.name}</td>
						    </tr>
						    <tr>
						      <td>Date of Birth</td>
						      <td>${e.dateOfBirth}</td> 
						    </tr>
						    <tr>
						      <td>Nationality</td>
						      <td>${e.nationality}</td> 
						    </tr>
						    <tr>
						      <td>Position</td>
						      <td>${e.position}</td> 
						    </tr>
						    <tr>
						      <td>Shirt Number</td>
						      <td>${e.shirtNumber || '?'}</td> 
						    </tr>
						     <tr>
						      <td>More Detail</td>
						      <td><a href="#/players/${e.id}"><i class="fas fa-info"></i></a></td> 
						    </tr>
						  </tbody>
						</table>
			        </div>
			        </div>
			    </div>
    		  </div>		
		`
    },

    async afterRender(data) {
        $('.allButton #addToFavorite').on('click', async () => {
            await this.addToFavoriteTeamIDB(this.data || data);
        })
        this.data.squad.forEach((e) => {
            document.querySelector('.squad div.squad-team').innerHTML += this.itemSquad(e);
        });
        this.accordionToggle();
    },
    accordionToggle() {
        const accordionHeader = document.querySelectorAll('.accordion-header');

        accordionHeader.forEach((header) => {
            header.addEventListener('click', function() {
                const accordionContent = header.parentElement.querySelector('.accordion-content');
                let accordionMaxHeight = accordionContent.style.maxHeight;

                if (accordionMaxHeight === "0px" || accordionMaxHeight.length == 0) {
                    accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
                    header.querySelector(".fas").classList.remove("fa-info");
                    header.querySelector(".fas").classList.add("fa-minus");
                    header.parentElement.classList.add("bg-indigo-50");
                } else {
                    accordionContent.style.maxHeight = `0px`;
                    header.querySelector(".fas").classList.add("fa-info");
                    header.querySelector(".fas").classList.remove("fa-minus");
                    header.parentElement.classList.remove("bg-indigo-50");
                }
            })
        })
    },
    addColorsTeams(colors) {
        const colorsHex = [];
        const typoColorNames = {
            "navyblue": "navy",
            "claret": "#811331",
        };

        let item = '';
        let maxItem = {
            'start': 0,
            'stop': 3,
        };
        colors.forEach((e) => {
            if (maxItem['start'] != maxItem['stop']) {
                let deleteSpaceInText = e.toLowerCase().replace(/\s/g, '');
                let color = (typoColorNames[deleteSpaceInText] != null) ? typoColorNames[deleteSpaceInText] : deleteSpaceInText;
                colorsHex.push(color);
            }
            maxItem['start']++;
        });
        return colorsHex;
    },
    async addToFavoriteTeamIDB(data) {
        if (!!await FavoriteTeamIDB.getTeam(data.id)) {
            await FavoriteTeamIDB.deleteTeam(data.id).then(() => {
                    $('.allButton #addToFavorite').empty();
                    $('.allButton #addToFavorite').append(this.allButton(this.colors)["beforeAdd"]);
                    let message = `${data.name} sucessfuly deleted from favorite`;
                    Toastify({
                        text: `${data.name} sucessfuly deleted from favorite`,
                        duration: 3000,
                        destination: "#/favorite-page",
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                    this.showNotification(message);
                })
        } else {
            await FavoriteTeamIDB.putTeam(data).then(() => {
                    $('.allButton #addToFavorite').empty();
                    $('.allButton #addToFavorite').append(this.allButton(this.colors)["afterAdd"]);
                    let message = `${data.name} sucessfuly added to favorite`;
                    Toastify({
                        text: `${data.name} sucessfuly added to favorite`,
                        duration: 3000,
                        destination: "#/favorite-page",
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                    this.showNotification(message);
                })
        }
    },
    showNotification(message) {
        const title = "Progressive Web Apps";
        const options = {
            body: message,
            icon: "favicon.png",
            badge: "favicon.png",
        }

        if (Notification.permission === 'granted') {
            navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification(title, options);
            })
        } else {
            console.error("Feature Notification Not Allowed")
        }
    }
}


export default clubPage;
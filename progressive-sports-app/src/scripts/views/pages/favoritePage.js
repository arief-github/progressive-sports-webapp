import heroImage from '../components/hero-image'
import cardItemFavorite from '../components/card-item-favorite'
import FootballDataApi from '../../data/footballDataApi'
import idCompetitions from '../../data/idCompetitions'
import FavoriteTeamIDB from '../../data/favoriteTeamIDB';
import Toastify from 'toastify-js';

const favoritePage = {
    async init() {
        return `
			<div class="favorite-page dark:bg-gray-800 w-full h-auto flex-row ">
				<div id="hero-image"></div>
				<div class="title flex sm:flex-row font-semibold ml-6 text-2xl sm:items-center">
					<div class="title-favorite-teams my-auto flex items-center w-2/4 ">
							<svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
							</svg>
						<span class="my-auto ml-2 text-xl">
							Your Favorite Teams
						</span>
					</div>
					<div class="search-favorite-teams sm:ml-auto mr-6 flex w-2/4">
						<div class="ml-auto flex items-center border border-gray-300 w-4/4 sm:2/4 shadow-inner rounded-md ">
							<button id="btn-search-teams" class="hover:shadow-inner dark:text-white m-auto flex items-center p-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</button>
							<input type="text" id="search-team" class="w-5/6 dark:bg-gray-800 dark:text-white  text-xl sm:ml-auto hidden focus:outline-none" placeholder="Search Team">
						</div>
					</div>
				</div>
				<custom-loading></custom-loading>

				<div id="list-teams" class="list-teams w-full h-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				</div>
			</div>`;
    },

    async afterRender() {
        document.querySelector('#hero-image').innerHTML += heroImage;
        this.allTeams = await FavoriteTeamIDB.getAllTeams();
        await this.updateTeams();
        await this.domSearchTeam();
        await this.domShowFormSeach();
    },
    addColorsTeams(colors = ["black", "white"]){
		const colorsHex = [];
		const typoColorNames = {
			"navyblue" : "navy",
			"claret" : "#811331",
		};

		let item = '';
		let maxItem = {
			'start' : 0,
			'stop' : 3,
		};
		colors.forEach((e)=>{
			if(maxItem['start'] != maxItem['stop']){
				let deleteSpaceInText = e.toLowerCase().replace(/\s/g, '');
				let color = (typoColorNames[deleteSpaceInText] != null) ? typoColorNames[deleteSpaceInText] : deleteSpaceInText;
				colorsHex.push(color);
			}
			maxItem['start']++;
		});
		return colorsHex;
	},
    allButton(colors){
		const buttons = {
			"afterAdd" : `<svg xmlns="http://www.w3.org/2000/svg" style="color:${(colors[0] == "white")? colors[1] : colors[0]}" class=" m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
						   </svg>`,
			"beforeAdd" : `<svg xmlns="http://www.w3.org/2000/svg" style="color:${(colors[0] == "white")? colors[1] : colors[0]}" class=" m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
						  </svg>`
		};
		return buttons;
	},
    async updateTeams(){
        await FavoriteTeamIDB.getAllTeams()
        	.then((value)=>{
        		document.querySelector('.list-teams').innerHTML = "";
		    	$("custom-loading").remove()
		    	if(value.length == 0){
					document.querySelector('.favorite-page').innerHTML += "<message-null></message-null>";
		    	}else{
		    		value.forEach((e)=>{
		    			let spitClubColors = e.clubColors.split(" / ");
		                document.querySelector('.list-teams').innerHTML += cardItemFavorite({
		                    idTeam : e.id,
		                    nameTeam: e.shortName,
		                    location: e.address,
		                    stadion: e.venue,
		                    pathImage: e.crestUrl,
		                    clubColor: spitClubColors,
		                });
		            });
		    	}
		    })
		   	.catch((e)=>{
		   		document.querySelector('.favorite-page').innerHTML += `<message-error message="${e.statusText}"></message-error>`;
		   	});

        const prosesBtn = ()=>{
       		$('.btn-favorite').each( async(i,obj)=>{
       			try{
	       			const id = obj.attributes[1].value;
	       			const data = this.allTeams.find((value)=> value.id == id);
					if(!!await FavoriteTeamIDB.getTeam(data.id)){
							obj.innerHTML = this.allButton(this.addColorsTeams(data.clubColors.split(" / ")))["afterAdd"];
					}else{
							obj.innerHTML = this.allButton(this.addColorsTeams(data.clubColors.split(" / ")))["beforeAdd"];
					}
       			}catch(e){
       			}
       		})
        }
		const prosesEventClickFavorite = ()=>{
			$('.btn-favorite').on('click',async (e)=>{
				const id = e.currentTarget.attributes[1].value;
				const data = this.allTeams.find((value)=> value.id == id);
				if(!!await FavoriteTeamIDB.getTeam(data.id)){
					await FavoriteTeamIDB.deleteTeam(data.id).then(async()=>{
						this.allTeams = await FavoriteTeamIDB.getAllTeams();
						await this.updateTeams();
					})
					.then(() => {
						let message = `${data.name} sucessfuly deleted from favorite`;
						Toastify({
							text: `${data.name} sucessfuly deleted from favorite`,
							duration: 3000,
							destination: "#/",
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
				}else{
					await FavoriteTeamIDB.putTeam(data).then(()=>{
						let target = e.currentTarget;
						target.innerHTML = this.allButton(this.addColorsTeams(data.clubColors.split(" / ")))["afterAdd"];
					})
				}
			})
		}
		prosesBtn();
		prosesEventClickFavorite();
   	},
    async domSearchTeam() {
        $('#search-team').on('keyup', () => {
            let value = $('#search-team').val();
            let cardTeams = [...$('#list-teams .item-card')];
            cardTeams.filter((e) => {
                let listTeams = e.querySelector('.side-mid .description h1');
                if (listTeams.innerText.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    e.classList.add("inline");
                    e.classList.remove("hidden");
                } else {
                    e.classList.add("hidden");
                    e.classList.remove("inline");
                }
            })
        });
    },

    async domShowFormSeach() {
        $('#btn-search-teams').on('click', () => {
            $('#search-team').toggleClass('hidden');

        })
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


export default favoritePage;
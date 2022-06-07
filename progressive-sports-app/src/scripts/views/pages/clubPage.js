import UrlParser from '../../routes/url-parser';
import FootballDataApi from '../../data/footballDataApi';
import FavoriteTeamIDB from '../../data/favoriteTeamIDB';

const clubPage = {

	async init(){
		let html;
		
		this.data = await this.getData();
		this.colors = this.addColorsTeams(this.data.clubColors.split(" / "));
		html = await this.createHTML({
			value: this.data,
			colors : this.colors,
		});
		return html;
	},

	async getData(){
		const footballDataApi = new FootballDataApi();
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		return await footballDataApi.getTeams({id : url.id});
	},

	async createHTML({value, colors}){
		return `
			<div class="w-full h-auto bg-white">
				<div class="hero-image w-full h-[300px] relative bg-gradient-to-r from-black via-white to-green-500 py-8 flex"
					style = "
						--tw-gradient-stops: ${colors[0]},${colors[1]},${colors[2] || colors[0] };">
					<img class="m-auto h-full" src="${value.crestUrl || '?'}"></img>
				</div>
				<div class="flex flex-col md:flex-row w-full h-auto">
					<div class="detail flex flex-col w-full md:w-5/6 h-full">
						<div class="flex p-8">
							<h1 class="mr-4 font-bold text-3xl">${value.shortName || '?'}</h1>
							<h3 class="mt-auto text-md">${value.name || '?'}</h3>
						</div>
						<div class="flex ml-8 my-4">
							<h2 class="w-1/4 mr-auto font-semibold text-lg">Stadion</h2>
							<h2 class="w-3/4 mt-auto  font-semibold text-lg">${value.venue || '?'}</h2>
						</div>
						<div class="flex ml-8 my-4">
							<h2 class="w-1/4 mr-auto font-semibold text-lg">Email</h2>
							<h2 class="w-3/4 mt-auto  font-semibold text-lg">${value.email || '?'}</h2>
						</div>
						<div class="flex ml-8 my-4">
							<h2 class="w-1/4 mr-auto font-semibold text-lg">Address</h2>
							<h2 class="w-3/4 mt-auto  font-semibold text-lg">${value.address || '?'}</h2>
						</div>
						<div class="flex ml-8 my-4">
							<h2 class="w-1/4 mr-auto font-semibold text-lg">Phone</h2>
							<h2 class="w-3/4 mt-auto  font-semibold text-lg">${value.phone || '?'}</h2>
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
					<div class="squad-team w-full h-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
					</div>
				</div>
			</div>`
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
	itemSquad(e){
		return `<div class="bg-white shadow-md w-full h-20 rounded-md flex flex-col">
						<div class="title flex w-full">
							<span class="w-3/6 font-semibold text-left mx-2 text-sm">Name</span>
							<span class="w-2/6 font-semibold text-left mx-2 text-sm">Nationality</span>
							<span class="w-1/6 font-semibold text-left mx-2 text-sm">Position</span>
						</div>
						<div class="title flex w-full h-full my-2">
							<div class="w-3/6 h-full bg-gray-100 mx-2 text-sm flex">
							<a href="#/players/${e.id}"><span class="truncate m-auto p-3">${e.name || '?'}</span></a>	
							</div>
							<div class="w-2/6 h-full bg-gray-100 mx-2 text-sm flex">
								<span class="truncate m-auto p-3">${e.nationality || '?'}</span>
							</div>
							<div class="w-1/6 h-full bg-gray-100 mx-2 text-sm flex">
								<span class="truncate m-auto p-3">${e.position || '?'}</span>
							</div>
						</div>
					</div>`
	},

	async afterRender(){
		$('.allButton #addToFavorite').on('click',async ()=>{
			await this.addToFavoriteTeamIDB();
		})
		this.data.squad.forEach((e)=>{
				document.querySelector('.squad div.squad-team').innerHTML += this.itemSquad(e);
			}
		);
	},

	addColorsTeams(colors){
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
	async addToFavoriteTeamIDB(){
		if(!!await FavoriteTeamIDB.getTeam(this.data.id)){
			await FavoriteTeamIDB.deleteTeam(this.data.id).then(()=>{
				$('.allButton #addToFavorite').empty();
				$('.allButton #addToFavorite').append(this.allButton(this.colors)["beforeAdd"]);
			})
		}else{
			await FavoriteTeamIDB.putTeam(this.data).then(()=>{
				$('.allButton #addToFavorite').empty();
				$('.allButton #addToFavorite').append(this.allButton(this.colors)["afterAdd"]);
			})
		}
	}
}


export default clubPage;

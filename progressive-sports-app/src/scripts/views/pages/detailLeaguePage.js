<<<<<<< Updated upstream
=======
import FootballDataApi from '../../data/footballDataApi'
import idCompetitions from '../../data/idCompetitions'
import UrlParser from '../../routes/url-parser';
import cardItemFavorite from '../components/card-item-favorite';

>>>>>>> Stashed changes
const detailLeaguePage = {
	async init(){
		this.footballDataApi = new FootballDataApi();
		this.id = this.getId();
		this.competitionDetail = await this.footballDataApi.getCompetitionsById({id:this.id});
		console.log(this.competitionDetail)
		return `
<<<<<<< Updated upstream
		<div class="">
			<p class="text-center font-bold">INFO LIGA</p>
			<p class="text-center font-bold">Premier League</span>

			<div class="relative overflow-x-auto grid justify-center">
				<table class="myTable w-700px text-sm text-left text-black ">
				<thead class="text-xs text-black uppercase">
					<tr>
					<th scope="col" class="px-6 py-3 ">
						Position
					</th>
					<th scope="col" class="px-6 py-3">
						Clubs
					</th>
					<th scope="col" class="px-6 py-3">
						MP
					</th>
					<th scope="col" class="px-6 py-3">
						Won
					</th>
					<th scope="col" class="px-6 py-3">
						Draw
					</th>
					<th scope="col" class="px-6 py-3">
						Lose
					</th>
					<th scope="col" class="px-6 py-3">
						GF
					</th>
					<th scope="col" class="px-6 py-3">
						GA
					</th>
					<th scope="col" class="px-6 py-3">
						GD
					</th>
					<th scope="col" class="px-6 py-3">
						Points
					</th>
					</tr>
				</thead>
				<tbody class="border dark:border-gray-700">
					<tr class="bg-white border-r dark:border-gray-700">
					<th
						class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap border-spacing-7 ">
						1
					</th>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap">
						2
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						3
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						4
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						5
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						6
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						7
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						8
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						9
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						10
					</td>

					</tr>

					<tr class="bg-white dark:border-gray-700">
					<th class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap">
						1
					</th>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap">
						2
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						3
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						4
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						5
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						6
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						7
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						8
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						9
					</td>
					<td class="px-6 py-4 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap ">
						10
					</td>

					</tr>
				</tbody>
				</table>
			</div>
		</div>
		
		`;
=======
		<div class="detailLeague flex flex-col">
			<div class="w-full flex flex-col p-8">
				<div class="w-full h-full m-auto flex">
					<img src="${this.competitionDetail.emblemUrl}" class="m-auto w-[200px] h-[200px]"></img>
				</div>
			</div>
			<div class="buttonSelect w-full shadow-md bg-green-200 flex p-2">
				<button id="selectTeams" class="bg-white w-1/6 shadow-inner  p-2 mx-4 bg-green-400 shadow-md font-semibold text-white">Teams</button>
				<button id="selectStandings" class="w-1/6 bg-white shadow-inner p-2 mx-4">Standings</button>
			</div>
			<div class="frame-select">
				<div id="list-teams" class="list-teams w-full h-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"></div>
				<div class="list-standings w-full h-auto px-8 mt-4" >
					<div class="item-title w-full h-auto py-2 grid gap-2 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 xl:grid-cols-11 2xl:grid-cols-12 bg-green-400 text-white">
						<div class="w-full">Position</div>
						<div class="w-full col-span-2 truncate">Clubs</div>
						<div class="w-full hidden sm:inline">MP</div>
						<div class="w-full hidden sm:inline">Won</div>
						<div class="w-full hidden md:inline">Draw</div>
						<div class="w-full hidden md:inline">Lose</div>
						<div class="w-full hidden lg:inline">GF</div>
						<div class="w-full hidden lg:inline">GA</div>
						<div class="w-full hidden lg:inline">GD</div>
						<div class="w-full">Points</div>
					</div>
				</div>
			</div>
			
		`;
	},
	getId(){
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		return url.id;
	},
	async afterRender() {
		this.prosesButton();
		this.renderTeams();
		document.querySelector('#selectTeams').addEventListener('click',()=>{
			this.renderTeams();
		});
		document.querySelector('#selectStandings').addEventListener('click',()=>{
			this.renderTable();
		});
	},
	async prosesButton(){
		$('.buttonSelect button').click((event)=>{
    		$('.buttonSelect').children().removeClass('bg-green-400 shadow-md font-semibold text-white')
    		$(event.target).toggleClass('bg-green-400 shadow-md font-semibold text-white')
    	})
	},
	async renderTable() {
    	$(".frame-select").children().toggleClass('hidden');
    	$(".frame-select .list-standings").removeClass('hidden');
		document.querySelector('.list-standings').innerHTML = "";
		document.querySelector('.list-standings').innerHTML += `<custom-loading></custom-loading>`;
		await this.footballDataApi.getAllCompetitionStandingsById({id:this.id}).then((competition)=>{
			$("custom-loading").remove();
			$(".item-list").remove();
			let colorList = false;
			competition.standings[0].table.map((e)=>{
				let tampClass = (colorList)? "bg-green-300": "bg-green-200";
				document.querySelector('.list-standings').innerHTML += `
					<div class="item-list w-full h-full py-[1px] grid gap-2 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 xl:grid-cols-11 2xl:grid-cols-12">
						<div class="w-full ${tampClass} ">${e.position}</div>
						<div class="w-full  ${tampClass} col-span-2 truncate">${e.team.name}</div>
						<div class="w-full  ${tampClass} hidden sm:inline">${e.playedGames}</div>
						<div class="w-full  ${tampClass} hidden sm:inline">${e.won}</div>
						<div class="w-full  ${tampClass} hidden md:inline">${e.draw}</div>
						<div class="w-full  ${tampClass} hidden md:inline">${e.lost}</div>
						<div class="w-full  ${tampClass} hidden lg:inline">${e.goalsFor}</div>
						<div class="w-full  ${tampClass} hidden lg:inline">${e.goalsAgainst}</div>
						<div class="w-full  ${tampClass} hidden lg:inline">${e.goalDifference}</div>
						<div class="w-full  ${tampClass}">${e.points}</div>
					</div>
				`;
				colorList = (colorList)? false: true;

			})
		// let dataTable = item.table
		// let getAlldataTeam = dataTable.map((e)=>{
		// 	document.getElementById('team-list').innerHTML += ` 
		// 				<tr>
		// 					<td>${e.position}</td>
		// 					<td>${e.team.name}</td>
		// 					<td>${e.playedGames}</td>
		// 					<td>${e.won}</td>
		// 					<td>${e.draw}</td>
		// 					<td>${e.lost}</td>
		// 					<td>${e.goalsFor}</td>
		// 					<td>${e.goalsAgainst}</td>
		// 					<td>${e.goalDifference}</td>
		// 					<td>${e.points}</td>
		// 				</tr>
		// 			`
		// 	})			
		})
    },
    async renderTeams(){
    	$(".frame-select").children().toggleClass('hidden');
    	$(".frame-select .list-teams").removeClass('hidden');

    	document.querySelector('.frame-select').innerHTML += `<custom-loading></custom-loading>`;
    	await this.footballDataApi.getAllTeamsByIdCompetitions({id : this.id})
        	.then((value)=>{
		    	$("custom-loading").remove()
		    	document.querySelector('.frame-select .list-teams').innerHTML = "";
	    		value.teams.forEach((e)=>{
	    			try{		    			
		    			let spitClubColors = (e.clubColors != null) ? e.clubColors.split(" / ") : ["white","white"];
		                document.querySelector('.frame-select .list-teams').innerHTML += cardItemFavorite({
		                    idTeam : e.id,
		                    nameTeam: e.shortName,
		                    location: e.address,
		                    stadion: e.venue,
		                    pathImage: e.crestUrl,
		                    clubColor: spitClubColors,
		                });	    				
	    			}catch(e){
	    				console.log(e);
	    			}
	    		});
   		 });
    }
}
>>>>>>> Stashed changes


	}
}
export default detailLeaguePage;
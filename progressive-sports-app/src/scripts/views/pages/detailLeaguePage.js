import FootballDataApi from '../../data/footballDataApi'
import idCompetitions from '../../data/idCompetitions'
import UrlParser from '../../routes/url-parser';
import cardItemFavorite from '../components/card-item-favorite';
import FavoriteTeamIDB from '../../data/favoriteTeamIDB';

const detailLeaguePage = {
    async init() {
        this.footballDataApi = new FootballDataApi();
        this.id = this.getId();
        this.competitionDetail = await this.footballDataApi.getCompetitionsById({ id: this.id });
        return `
        <div class="detailLeague flex flex-col">
            <div class="w-full flex flex-col p-8 flex-column">
                <div class="w-full h-full m-auto">
                    <img src="${this.competitionDetail.emblemUrl}" class="m-auto w-[200px] h-[200px]">
					          <h1 class="m-auto mt-2 w-fit h-fit  text-3xl underline">${this.competitionDetail.name}</h1>
                    <span class="m-auto mt-2 w-fit h-fit text-l flex">Match Today : ${this.competitionDetail.currentSeason.currentMatchday}</span>
                    <span class="m-auto mt-2 w-fit h-fit text-l flex">Start : ${this.competitionDetail.currentSeason.startDate}</span>
                    <span class="m-auto mt-2 w-fit h-fit text-l flex">End : ${this.competitionDetail.currentSeason.endDate}</span>
                </div>
            </div>
            <div class="buttonSelect w-full shadow-md bg-green-200 flex p-2">
                <button id="selectTeams" class="bg-white w-1/6 shadow-inner  p-2 mx-4 bg-green-400 shadow-md font-semibold text-white">Teams</button>
                <button id="selectStandings" class="w-1/6 bg-white shadow-inner p-2 mx-4">Standings</button>
            </div>
            <div class="frame-select">
                <div id="list-teams" class="list-teams w-full h-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"></div>
                <div class="list-standings w-full h-auto px-8 mt-4" >
                    <div class="item-title w-full h-auto py-2 grid gap-2 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 xl:grid-cols-11 2xl:grid-cols-11 bg-green-400 text-white">
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
    getId() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        return url.id;
    },
    async afterRender() {
        this.prosesButton();
        this.renderTeams();
        document.querySelector('#selectTeams').addEventListener('click', () => {
            this.renderTeams();
        });
        document.querySelector('#selectStandings').addEventListener('click', () => {
            this.renderTable();
        });
    },
    async prosesButton() {
        $('.buttonSelect button').click((event) => {
            $('.buttonSelect').children().removeClass('bg-green-400 shadow-md font-semibold text-white')
            $(event.target).toggleClass('bg-green-400 shadow-md font-semibold text-white')
        })
    },
    async renderTable() {
        const titleGroup = (nameGroup)=>{
          return `
        <div class="item-list w-full h-full py-[1px] mt-2 grid gap-2 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 xl:grid-cols-11 2xl:grid-cols-11">
            <div class="item-group bg-green-400 text-white">${nameGroup}</div>
          </div>`;
        };
        $(".frame-select").children().toggleClass('hidden');
        $(".frame-select .list-standings").removeClass('hidden');
        $(".item-list").remove();
        document.querySelector('.list-standings').innerHTML += `<custom-loading></custom-loading>`;
        await this.footballDataApi.getAllCompetitionStandingsById({ id: this.id }).then((competition) => {
            $("custom-loading").remove();

            let colorList = false;
            competition.standings.forEach((item) => {
            	let nameGroup = item.group;
            	if(nameGroup != null){
            		document.querySelector('.list-standings').innerHTML += titleGroup(nameGroup);
            	}
                item.table.map((e) => {
                    let tampClass = (colorList) ? "bg-green-300" : "bg-green-200";
                    document.querySelector('.list-standings').innerHTML += `
                    <div class="item-list w-full h-full py-[1px] grid gap-2 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 xl:grid-cols-11 2xl:grid-cols-11">
                        <div class="w-full ${tampClass} ">${e.position}</div>
                        <div class="w-full flex justify-start ${tampClass} col-span-2 truncate p-2">
	                        <img class="w-10 h-10 mr-4" src="${e.team.crestUrl}" alt="${e.team.name}">
	                        <a href="#/teams/${e.team.id}" class="m-auto truncate">${e.team.name}</a>
                        </div>
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
                    colorList = (colorList) ? false : true;
                })
            })
        })
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
	
	async renderTeams() {
        $(".frame-select").children().toggleClass('hidden');
        $(".frame-select .list-teams").removeClass('hidden');

        document.querySelector('.frame-select').innerHTML += `<custom-loading></custom-loading>`;
        await this.footballDataApi.getAllTeamsByIdCompetitions({ id: this.id })
            .then((value) => {
                $("custom-loading").remove()
                document.querySelector('.frame-select .list-teams').innerHTML = "";
                this.allTeams = value.teams;
                value.teams.forEach((e) => {
                    try {
                        let spitClubColors = (e.clubColors != null) ? e.clubColors.split(" / ") : ["white", "white"];
                        document.querySelector('.frame-select .list-teams').innerHTML += cardItemFavorite({
                            idTeam: e.id,
                            nameTeam: e.shortName,
                            location: e.address,
                            stadion: e.venue,
                            pathImage: e.crestUrl,
                            clubColor: spitClubColors,
                            data : e,

                        });
                    } catch (e) {

                    }
                });
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
					await FavoriteTeamIDB.deleteTeam(data.id).then(()=>{
						let target = e.currentTarget;						
						target.innerHTML = this.allButton(this.addColorsTeams(data.clubColors.split(" / ")))["beforeAdd"];
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
    }
}

export default detailLeaguePage;
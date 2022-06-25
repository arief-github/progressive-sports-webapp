import UrlParser from '../../routes/url-parser';
import FootballDataApi from '../../data/footballDataApi';
import identityPlayer from '../components/card-player';

const detailPlayerPage = {
    async init() {
        this.footballDataApi = new FootballDataApi();
        this.id = this.getId();
        return ` 
            <div class="buttonSelect w-full shadow-md bg-green-200 flex justify-center p-2">
                <button id="playerBiodata" class="bg-white w-1/6 shadow-inner p-2 mx-4 bg-green-400 shadow-md font-semibold dark:text-gray-800 text-white text-sm md:text-base">Biodata</button>
                <button id="matchesHistory" class="w-1/6 dark:text-gray-800 bg-white shadow-inner p-2 mx-4 text-sm md:text-base">Match History</button>
            </div>
            <div class="player container min-h-[400px] w-auto p-8 flex flex-wrap justify-center">
            
            </div>
            <div class="flex flex-col h-full">
                <div class="flex-grow">
                      <table class="list-history w-80 px-8 m-auto relative sm:w-full hidden" >

                      </table>
                </div>
            </div>
        `
    },
    async processBtn() {
        $('.buttonSelect button').click((event) => {
            $('.buttonSelect').children().removeClass('bg-green-400 shadow-md font-semibold text-white')
            $(event.target).toggleClass('bg-green-400 shadow-md font-semibold text-white')
        })
    },
    async afterRender() {
        const playerInfo = document.querySelector('#playerBiodata');
        const historyMatch = document.querySelector('#matchesHistory');

        playerInfo.addEventListener('click', () => {
            $('.list-history').addClass("hidden");
            $('.player').removeClass("hidden");
            this.renderInfoPlayer();
        });

        historyMatch.addEventListener('click', () => {
            $('.player').addClass("hidden");
            $('.list-history').removeClass("hidden");
            this.renderMatchHistory();
        })
        await this.processBtn();
        this.renderInfoPlayer();
    },
    getId() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        return url.id;
    },
    info() {
        return `
              <div class="info">
              </div>
              <div class="info info-player dark:bg-gray-800"></div>
        `;
    },
    async renderInfoPlayer() {
        $(".list-history").children().toggleClass('hidden');
        $(".player .info-player").removeClass('hidden');
        document.querySelector('.player').innerHTML += `<custom-loading></custom-loading>`;

        await this.footballDataApi.getDetailPlayers({ id: this.id })
            .then((value) => {
                $("custom-loading").remove();
                document.querySelector('.player').innerHTML = this.info();
                const infoPlayerContainer = document.querySelector('.info-player');
                infoPlayerContainer.innerHTML += identityPlayer({
                    name: value.name,
                    firstName: value.firstName,
                    lastName: value.lastName,
                    dateOfBirth: value.dateOfBirth,
                    nationality: value.nationality,
                    position: value.position,
                    shirtNumber: value.shirtNumber,
                });
            })
            .catch((e) => {
                $("custom-loading").remove()
                if (e.status == 0) {
                    document.querySelector('.player').innerHTML = `<message-error message="Limit Request waiting 1 minute" class="col-span-full"></message-error>`;
                } else {
                    document.querySelector('.player').innerHTML = `<message-error message="${e.statusText}" class="col-span-full"></message-error>`;
                }
            })
    },
    showingHeadTable({ title }) {
        return ` 
            <caption class = "text-center text-green-600">MATCH HISTORY WITH ${title}</caption>
            <thead>
             <tr class="bg-green-400">
                <th class="p-2">Competition</th>
                <th class="w-1/2 p-2 text-center">Home Team</th>
                <th class="p-2 text-center">Scores</th>
                <th class="w-1/2 p-2 text-center">Away Team</th>
                <th class="p-2 text-center">Group</th>
             </tr>
            </thead>
        `
    },
    async renderMatchHistory() {
        $(".player").children().toggleClass('hidden');
        $(".player .list-history").removeClass('hidden');
        let colorList = false;
        await this.footballDataApi.getDetailPlayersAndMatch({ id: this.id })
            .then((value) => {
                value.matches.forEach((item) => {
                    document.querySelector('.list-history').innerHTML = this.showingHeadTable({ title: item.homeTeam.name });
                })
            })

        await this.footballDataApi.getDetailPlayersAndMatch({ id: this.id })
            .then((value) => {
                value.matches.forEach((item) => {
                    let tampClass = (colorList) ? "bg-green-300" : "bg-green-200";
                    console.log(item);
                    document.querySelector('.list-history').innerHTML +=
                        `  
                           <tbody>
                                <tr>
                                  <td class="${tampClass} p-2 text-center">${item.competition.name}</td>
                                  <td class="${tampClass} p-2 text-center">${item.homeTeam.name} </td>
                                  <td class="${tampClass} p-2 text-center text-slate-900"> ${item.score.fullTime.homeTeam} : ${item.score.fullTime.awayTeam}</td>
                                  <td class="${tampClass} p-2 text-center">${item.awayTeam.name} </td>
                                  <td class="${tampClass} p-2 text-center"><span class="incident text-red-500">${item.group ? item.group.split('_') : '-'}</td>
                                </tr>
                              </tbody> 
                    `
                    colorList = (colorList) ? false : true;
                })

            })
            .catch((e) => {
                $("custom-loading").remove()
                if (e.status == 0) {
                    document.querySelector('.player').innerHTML = `<message-error message="Limit Request waiting 1 minute" class="col-span-full"></message-error>`;
                } else {
                    document.querySelector('.player').innerHTML = `<message-error message="${e.statusText}" class="col-span-full"></message-error>`;
                }
            })
    },
}

export default detailPlayerPage;
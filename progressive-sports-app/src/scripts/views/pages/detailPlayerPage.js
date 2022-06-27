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
                    lastName: value.lastName != null ? value.shirtNumber : "N/A",
                    dateOfBirth: value.dateOfBirth,
                    nationality: value.nationality,
                    position: value.position,
                    shirtNumber: value.shirtNumber != null ? value.shirtNumber : "N/A",
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
            <div class="w-auto h-auto mt-4" >
            <div class="m-auto w-full h-full py-[1px] text-center grid gap-2 grid-cols-5 sm:grid-cols-5 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-9 2xl:grid-cols-9 bg-green-400 text-white">
                <div class="w-full col-span-2 hidden md:inline truncate text-sm md:text-base">Competition</div>
                <div class="w-full col-span-2 lg:col-span-2 sm:col-span-2 md:col-span-2 2xl:col-span-2 xl:col-span-2 truncate text-base md:text-lg">Home Team</div>
                <div class="w-full truncate text-base md:text-lg">scores</div>
                <div class="w-full lg:col-span-2 sm:col-span-2 truncate text-base md:text-lg text-center">Away Team</div>
                <div class="w-full col-span-2 hidden md:inline truncate text-base md:text-lg">Group</div>
            </div>
        </div>
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
                    document.querySelector('.list-history').innerHTML +=
                        `
                                <div class="item-list m-auto w-auto h-full py-[1px] text-center grid gap-2 grid-cols-5 sm:grid-cols-5 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-9 2xl:grid-cols-9">
                                <div class="w-full ${tampClass} md:col-span-2 lg:col-span-2 lg:col-span-1 col-span-3 hidden md:inline truncate text-sm md:text-base">${item.competition.name}</div>
                                <div class="w-full ${tampClass} col-span-2 truncate text-sm md:text-base">${item.homeTeam.name}</div>
                                <div class="w-full ${tampClass} md:col-span-1 truncate text-sm md:text-base text-black">${item.score.fullTime.homeTeam} : ${item.score.fullTime.awayTeam}</div>
                                <div class="w-full ${tampClass} col-span-2 truncate text-sm md:text-base">${item.awayTeam.name}</div>
                                <div class="w-full ${tampClass} col-span-2 hidden md:inline truncate text-sm md:text-base">${item.group ? item.group.split('_') : '-'}</div>
                              </div>
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
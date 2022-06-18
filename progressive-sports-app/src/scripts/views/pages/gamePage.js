import FootballDataApi from '../../data/footballDataApi'
import idCompetitions from '../../data/idCompetitions';
import UrlParser from '../../routes/url-parser'
import cardLastMatch from '../components/card-last-match';
import '../components/custom-loading'

const gamePage = {
    async init() {
        return `
        <div class="relative">
            <p class="my-10 text-4xl font-semibold text-center">Games Scheduled</p>
        </div>

        <custom-loading></custom-loading>
        
        <div id="next-match" class="next-match w-full my-4 p-8 text-2xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        </div>
        
          `;
    },
    async afterRender() {
        await this.getDataAndFilter();
    },
    card({element}){
        const time = new Date(element.utcDate).toLocaleTimeString("en-US")
        const date = new Date(element.utcDate).toLocaleDateString("en-US")
        return `
            <div class="bg-[#f2f2f2] dark:bg-gray-800 rounded-[8%] shadow-lg w-full h-[340px] flex flex-col">
                <div class="mx-auto flex h-3/6 w-full bg-white">
                    <span class="font-semibold w-full flex flex-col text-black "> 
                        <img class="lazyload fade-in w-[70%] h-[70%] m-auto brightness-150" data-src="${element.competition.area.ensignUrl}">
                    </span>
                </div>
                <div class="text-sm h-2/6 px-4 mt-4">
                    <div class="text-next-match truncate flex">
                    <span class="font-semibold flex-col text-black"> 
                        <i class="truncate m-auto">${element.homeTeam.name}</i> 
                        <i class="m-auto">VS</i> 
                        <i class="truncate m-auto">${element.awayTeam.name}</i>
                    </span>
                    </div>
                    <div class="truncate">Competition : ${element.competition.name}</div>
                    <div class="truncate">Match Day : ${element.matchday}</div>
                    <div class="truncate">Time : ${time}</div>
                    <div class="truncate">Date : ${date}</div>
                </div>
                <div class="text-4xl w-2/4 mb-2 m-auto h-1/6 bg-white flex rounded-[15%] shadow-md group hover:shadow-inner bg-[#f9f9f9]">
                    <a href="#/matches/${element.id}" class=" mx-auto my-auto w-full h-full flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6 text-gray-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        `
    },
    configurationDate(value){
        const date = new Date();
        date.setDate(date.getDate() + value)
        let dateFrom = date.toLocaleDateString("en-US").split('/');
        return `${dateFrom[2]}-${(dateFrom[0] >= 9) ? dateFrom[0] : `0${dateFrom[0]}`}-${(dateFrom[1] >= 9) ? dateFrom[1] : `0${dateFrom[1]}`}`;
    },
    async getDataAndFilter(){
        const footballDataApi = new FootballDataApi();
         await footballDataApi.getAllMatches({
            dateFrom : this.configurationDate(1),
            dateTo : this.configurationDate(10)
        }).then((value)=>{
             this.dataMatch = Array();
             idCompetitions.forEach((e)=>{
                const tamp = value.matches.filter((match)=>{
                        return match.competition.id == e.id
                });
                if(tamp.length != 0){
                    this.dataMatch.push(tamp);
                }
            });
             this.nextMatch();
        }).catch((e)=>{
            $("custom-loading").remove()
            if(e.status == 0){
                document.querySelector('.next-match').innerHTML = `<message-error message="Limit Request waiting 1 minute" class="col-span-full"></message-error>`;
            }else{
              document.querySelector('.next-match').innerHTML = `<message-error message="${e.statusText}" class="col-span-full"></message-error>`;
            }
        })

    },
    async nextMatch() {
        $("custom-loading").remove()
        this.dataMatch.forEach((value)=>{
            value.filter((matches) => matches.status === "SCHEDULED").forEach((e) => {
                document.querySelector('.next-match').innerHTML += this.card({element : e});
            });
        })
    }
};

export default gamePage;
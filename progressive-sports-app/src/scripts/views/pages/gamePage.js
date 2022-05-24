import cardLastMatch from '../components/card-last-match'
import cardNextMatch from '../components/card-next-match'
import FootballDataApi from '../../data/footballDataApi'
import UrlParser from '../../routes/url-parser'
import '../components/custom-loading'

const gamePage = {
	async init(){
		return `
    <div class="relative">
            <p class="mt-20 text-center font-medium uppercase text-4xl">Games</p>
            <p class="ml-20 mt-10 text-3xl mb-10 font-medium">Last Macth</p>
          </div>
          <custom-loading></custom-loading>
          <div id="list-teams2"  class="last-match w-full text-2xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-2 2xl:grid-cols-2">
          </div>
          <p class="ml-20 mt-10 text-3xl mb-10 font-medium">Next Macth</p>
          <custom-loading></custom-loading>
          <div id="next-matchs"  class="next-match mb-10 w-full text-2xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-2 2xl:grid-cols-2">
          </div>
          
          `;
	},
  async afterRender() {
    await this.LastMatch();
    await this.nextMatch();
  },
  async getData(){
		const footballDataApi = new FootballDataApi();
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		return await footballDataApi.getAllMatches({id : url.id});
	},
  async LastMatch(){
    const footballDataApi = new FootballDataApi();
    await footballDataApi.getAllMatches()
      .then((value)=>{
      $("custom-loading").remove()
      value.matches.filter((matches) => matches.status === "FINISHED").forEach((e) => {
        document.querySelector('.last-match').innerHTML += cardLastMatch({
                  idMatch: e.id,
                  teamOne: e.awayTeam.name,
                  teamTwo: e.homeTeam.name,
                  scoreOne: e.score.fullTime.homeTeam,
                  scoreTwo: e.score.fullTime.awayTeam,
                  pathImage: e.competition.area.ensignUrl,

              });
      });
    });
 },
 async nextMatch(){
  const footballDataApi = new FootballDataApi();
  await footballDataApi.getAllMatches()
    .then((value)=>{
    $("custom-loading").remove()
    value.matches.filter((matches) => matches.status === "SCHEDULED" && matches.score.fullTime.homeTeam === null && matches.score.fullTime.awayTeam === null).forEach((e) => {
            document.querySelector('.next-match').innerHTML += cardNextMatch({
                idMatch: e.id,
                teamOne: e.awayTeam.name,
                teamTwo: e.homeTeam.name,
                pathImage: e.competition.area.ensignUrl,

            });
    });
  });
  
}
};

export default gamePage;
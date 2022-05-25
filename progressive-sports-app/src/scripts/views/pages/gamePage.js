import cardLastMatch from '../components/card-last-match'
import cardNextMatch from '../components/card-next-match'
import FootballDataApi from '../../data/footballDataApi'
import '../components/custom-loading'

const gamePage = {
	async init(){
		return `
    <div class="relative">
            <p class="mt-20 text-center font-medium uppercase text-4xl">Games</p>
            <p class="ml-20 mt-10 text-3xl mb-10 font-medium">Last Macth</p>
          </div>
          <custom-loading></custom-loading>
          <div id="list-teams2"  class="list-teams2 w-full text-2xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-2 2xl:grid-cols-2">
          </div>
          <p class="ml-20 mt-10 text-3xl mb-10 font-medium">Next Macth</p>
          <div id="next-matchs"  class="next-matchs mb-10 w-full text-2xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-2 2xl:grid-cols-2">
          </div>
          
          `;
	},
  async afterRender() {
    await this.LastMatch();
    await this.nextMatch();
  },
  async LastMatch(){
    const footballDataApi = new FootballDataApi();
    await footballDataApi.getAllMatches()
      .then((value)=>{
        console.log(value)
      $("custom-loading").remove()
      console.log(value)
        value.matches.filter((matches) => matches.status === "FINISHED").forEach((e) => {
              document.querySelector('.list-teams2').innerHTML += cardLastMatch({
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
    console.log(value)
    value.matches.filter((matches) => matches.status === "SCHEDULED").forEach((e) => {
            document.querySelector('.next-matchs').innerHTML += cardNextMatch({
                teamOne: e.awayTeam.name,
                teamTwo: e.homeTeam.name,
                pathImage: e.competition.area.ensignUrl,

            });
    });
  });
  
}
};

export default gamePage;
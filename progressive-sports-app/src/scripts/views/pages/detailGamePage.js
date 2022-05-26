import detailGame from "../components/detail-game";
import FootballDataApi from "../../data/footballDataApi";
const detailGamePage = {
	async init(){
		return `<div class="detail-games relative">
		<p class="mb-20 text-center text-4xl  uppercase">Last Macth</p>
	  </div>`;
	},
	async afterRender() {
		await this.detailMatch();
	},
	
	async detailMatch(){
		const footballDataApi = new FootballDataApi();
		await footballDataApi.getAllMatches()
		  .then((value)=>{
		  $("custom-loading").remove()
		  let match = value.match;
	    document.querySelector('.detail-games').innerHTML += detailGame({
				  nameLeague: match.competition.name,
				  teamOne: match.awayTeam.name,
				  teamTwo: match.homeTeam.name,
				  pathImage: match.competition.area.ensignUrl,
  
			  });
		});
		
	  }
}


export default detailGamePage;

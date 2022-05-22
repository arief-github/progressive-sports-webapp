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
		  console.log(value)
		  value.matches.slice(0,1).forEach((e)=>{
				  document.querySelector('.detail-games').innerHTML += detailGame({
					  nameLeague: e.competition.name,
					  teamOne: e.awayTeam.name,
					  teamTwo: e.homeTeam.name,
					  pathImage: e.competition.area.ensignUrl,
	  
				  });
		  });
		});
		
	  }
}


export default detailGamePage;

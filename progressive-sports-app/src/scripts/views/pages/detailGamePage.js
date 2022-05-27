import detailGame from "../components/detail-game";
import FootballDataApi from "../../data/footballDataApi";
import UrlParser from '../../routes/url-parser';
const detailGamePage = {
	async init(){
		return `<div class="detail-games relative">
		<p class="mb-20 text-center text-4xl  uppercase">Last Match</p>
	  </div>`;
	},
	async afterRender() {
		await this.detailMatch();
	},
	getId() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        return url.id;
    },
	async detailMatch(){
		const footballDataApi = new FootballDataApi();
		await footballDataApi.getMatchById({id : this.getId()})
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

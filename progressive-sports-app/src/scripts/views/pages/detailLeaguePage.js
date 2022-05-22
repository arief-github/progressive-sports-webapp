import FootballDataApi from '../../data/footballDataApi'
import heroImage from '../components/hero-image.js';
import idCompetitions from '../../data/idCompetitions'

const detailLeaguePage = {
	async init(){
		return `
		<div id="hero-image"></div>
		<div class="detailLeague">
				<p>INFO LIGA</p>
				<p>Premier League</p>
			<div class="table-frame">
				<table id="table-header">
				<thead>
					<tr>
						<th scope="col">
							Position
						</th>
						<th scope="col">
							Clubs
						</th>
						<th scope="col">
							MP
						</th>
						<th scope="col">
							Won
						</th>
						<th scope="col">
							Draw
						</th>
						<th scope="col">
							Lose
						</th>
						<th scope="col">
							GF
						</th>
						<th scope="col">
							GA
						</th>
						<th scope="col">
							GD
						</th>
						<th scope="col">
							Points
						</th>
						</tr>
					</thead>

					<tbody id="team-list">
					</tbody>
				</table>
			</div>
		</div>
		`;
	},
	async afterRender(){
		document.getElementById('hero-image').innerHTML = heroImage;
	},

	async afterRender() {
		await this.renderTable();
	},
	async renderTable() {
		let containerHTML = '';
    	const footballDataApi = new FootballDataApi();
    	footballDataApi.getStandingsById(idCompetitions[11])
    	.then((value) => {
			console.log(value);
    		value.standings.forEach((item) => {
			let dataTable = item.table
			let getAlldataTeam = dataTable.map(function(e){
				containerHTML += ` 
							<tr>
								<td>${e.position}</td>
								<td>${e.team.name}</td>
								<td>${e.playedGames}</td>
								<td>${e.won}</td>
								<td>${e.draw}</td>
								<td>${e.lost}</td>
								<td>${e.goalsFor}</td>
								<td>${e.goalsAgainst}</td>
								<td>${e.goalDifference}</td>
								<td>${e.points}</td>
							</tr>
						`
				})
			
			console.log(getAlldataTeam);
			document.getElementById('team-list').innerHTML = containerHTML;
    		})
    	})
    }
}

export default detailLeaguePage;
import FootballDataApi from '../../data/footballDataApi'
import heroImage from '../components/hero-image.js';

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
					<tbody>
						<tr>
						<th>
							1
						</th>
						<td>
							2
						</td>
						<td>
							3
						</td>
						<td>
							4
						</td>
						<td>
							5
						</td>
						<td>
							6
						</td>
						<td>
							7
						</td>
						<td>
							8
						</td>
						<td>
							9
						</td>
						<td>
							10
						</td>
					</tr>
				</tbody>
				</table>
			</div>
		</div>
		`;
	},
	async afterRender(){
		document.getElementById('hero-image').innerHTML = heroImage;
	}
	
}

export default detailLeaguePage;
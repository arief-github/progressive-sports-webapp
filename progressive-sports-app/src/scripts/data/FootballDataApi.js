class FootballDataApi{
	APIKey = "";
	baseUrl = "";

	constructor(){
		this.APIKey = "fdaae91cecbc4992be43f96cc4ba9598";
		this.baseUrl = "https://api.football-data.org/v2";
	}

	async request(request){
		return await $.ajax({
			type: `GET`,
			url: `${this.baseUrl}/${request}`,
			headers:{
				"X-Auth-Token":this.APIKey
			}
		});
	}

	async getAllMatches(){
		let data;
		await this.request('matches')
			.then((response,status)=>{
					data = (status != 'error') ? response : status;
			});
		return data;
	}

	async getAllCompetitions(){
		let data;
		await this.request('competitions/')
			.then((response,status)=>{
					data = (status != 'error') ? response : status;
			});
		return data;
	}

	async getCompetitionsById({id}){
		let data;
		await this.request(`competitions/${id}`)
			.then((response,status)=>{
					data = (status != 'error') ? response : status;
			});
		return data;
	}

	async getAllTeamsByIdCompetitions({id}){
		let data;
		await this.request(`competitions/${id}/teams`)
			.then((response,status)=>{
					data = (status != 'error') ? response : status;
			});
		return data;
	}

	async getTeams({id}){
		let data;
		await this.request(`teams/${id}`)
			.then((response,status)=>{
					data = (status != 'error') ? response : status;
			});
		return data;
	}
	async getAllCompetitionStandingsById({id}){
		let data;
		await this.request(`competitions/${id}/standings`)
			.then((response,status)=>{
					data = (status != 'error') ? response : status;
			});
		return data;
	}
}


export default FootballDataApi;
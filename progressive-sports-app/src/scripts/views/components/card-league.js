const cardsLeague = ({idLeague, emblemUrl, leagueName, leagueAreaName, currentSeasonStartDate, currentSeasonEndDate}) => {
	const render = () => {
		return ` 
		   <div id="${idLeague}" class="card-league w-full h-[400px] flex flex-col bg-[#f2f2f2] rounded-[8%] shadow-lg m-auto">
				  <div class="side-top w-full h-3/6 max-h-[50%] min-h-[50%] flex items-center bg-white p-4">
				    <img class="mx-auto h-full" src="${emblemUrl}" alt="picture team">
				  </div>
				  <div class="side-mid flex pt-2 px-4 h-2/6 w-full items-center">
					  <div class="description min-w-[85%] mr-4">
					  	<h1 class="truncate text-2xl font-semibold">${leagueName}</h1>
					  	<h2 class="truncate text-lg mt-[2px] text-gray-700">${leagueAreaName}</h2>
					  	<h3 class="truncate text-md mt-[2px] text-gray-700">Start : ${currentSeasonStartDate}</h3>
					  	<h3 class="truncate text-md mt-[2px] text-gray-700">End : ${currentSeasonEndDate}</h3>
					  </div>
				  </div>
				  <div class="side-bottom w-full h-1/6 mb-2 flex justify-end">
				  		<a href="#/league/${idLeague}" class="btn-favorite rounded-[15%] w-[30%] hover:w-[50%] hover:duration-300 h-5/6 bg-[#f9f9f9]  shadow-md group hover:shadow-inner">
	             <svg class=" m-auto h-5 w-5 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="13" y1="20" x2="20" y2="13" />  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7" /></svg>
						</a>
				  </div>
		  	</div>

		`;
	}

	return render();
}

export default cardsLeague;
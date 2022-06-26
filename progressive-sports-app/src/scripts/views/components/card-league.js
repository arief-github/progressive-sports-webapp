const cardsLeague = ({ idLeague, emblemUrl, leagueName, leagueAreaName, currentSeasonStartDate, currentSeasonEndDate }) => {
    const render = () => {
        return `
		   <div id="${idLeague}" class="card-league dark:bg-gray-800 dark:text-white w-full h-[400px] flex flex-col bg-[#f2f2f2] rounded-[8%] shadow-lg m-auto">
				  <div class="side-top w-full h-3/6 flex items-center bg-white p-4">
				    <img class="lazyload fade-in mx-auto w-auto h-full" data-src="${emblemUrl}" alt="picture team">
				  </div>
				  <div class="side-mid flex pt-2 px-4 h-2/6 w-full items-center">
					  <div class="description w-full m-auto">
					  	<h1 class="truncate text-2xl font-semibold">${leagueName}</h1>
					  	<h3 class="truncate text-md mt-[2px] dark:text-white text-gray-700">Start : ${currentSeasonStartDate}</h3>
					  	<h3 class="truncate text-md mt-[2px] dark:text-white text-gray-700">End : ${currentSeasonEndDate}</h3>
					  </div>
				  </div>
				  <div class="side-bottom w-2/4 mx-auto h-1/6 mt-4 flex">
				  		<a href="#/league/${idLeague}" class="btn-detail-liga w-full h-full dark:bg-gray-800 flex rounded bg-[#f9f9f9] shadow-md group hover:shadow-inner focus:outline-none focus:ring focus:ring-green-500">
	             			<svg class=" m-auto h-5 w-5 text-black dark:text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="13" y1="20" x2="20" y2="13" />  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7" /></svg>
						</a>
				  </div>
		  	</div>

		`;
    }

    return render();
}

export default cardsLeague;
const detailGame = ({teamOne, teamTwo, nameLeague, scoreAwayTeam, scoreHomeTeam}) => {
	const render = () => {
		return `
        <p class="mb-10 text-center font- text-2xl uppercase ">${nameLeague}</p>
	 </div>
	  <div id="lastMatch" class="container flex justify-around mx-auto ">
		<div class="text-center text-2xl sm:text-center  md:flex  ">
			  <img class="h-36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
				<h2 class="mt-10  ">${teamOne}</h2>
				<h2 class="mt-2">${scoreHomeTeam}</h2>
		</div>
			<h2 class="text-2xl mt-10">VS</h2>
		<div class="text-center  text-2xl   sm:text-center   md:flex flex-row-reverse ">
			<img class="h-36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
				<h2 class="mt-10  ">${teamTwo}</h2>
				<h2 class="mt-2">${scoreAwayTeam}</h2>
		</div>
	</div>
		`;
	}
	
	return render();


}

export default detailGame;
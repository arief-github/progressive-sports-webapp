const detailGame = ({teamOne, teamTwo, nameLeague, pathImage}) => {
	const render = () => {
		return `
		<div class="w-full flex flex-col p-8 flex-column">
                <div class="w-full h-full m-auto">
                    <img src="${pathImage}" class="m-auto w-[200px] h-[200px]">
                    <h1 class="m-auto mt-2 w-fit h-fit  text-3xl underline">${nameLeague}</h1>
                </div>
            </div>
	 </div>
	  <div id="lastMatch" class="container flex justify-around mx-auto ">
		<div class="text-center text-2xl sm:text-center  md:flex  ">
			  <img class="h-36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
				<h2 class="mt-10  ">${teamOne}</h2>
		</div>
			<h2 class="text-2xl mt-10">VS</h2>
		<div class="text-center  text-2xl   sm:text-center   md:flex flex-row-reverse ">
			<img class="h-36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
				<h2 class="mt-10  ">${teamTwo}</h2>

		</div>
	</div>
		`;
	}
	
	return render();


}

export default detailGame;
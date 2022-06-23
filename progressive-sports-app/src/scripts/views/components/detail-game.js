const detailGame = ({
	teamOne, teamTwo, nameLeague, pathImage, ScoreOne, ScoreTwo, Venue, Date, Status, Stage   }) => {
	   const render = () =>  {
		return `
		<div class=" container dark:bg-gray-800 shadow-lg w-3/4 sm:w-1/2 lg:w-1/2 grid grid-cols-1 gap-4 content-around rounded-lg px-5 py-5  mx-auto  bg-white  shadow-md ">
					<div class="text-center  text-xl mb-5 font-semibold lg:text-4xl uppercase brightness-150">Detail Game</div>
                    <div class="truncate text-xs lg:text-sm">COMPETITION : ${nameLeague}</div>
                    <div class="truncate text-xs lg:text-sm">STATUS :  ${Status}  </div>
                    <div class="truncate text-xs lg:text-sm">Venue : ${(Venue == null) ? "No Data" : Venue}</div>
                    <div class="truncate text-xs lg:text-sm">Date : ${Date}</div>
					<div class="truncate text-xs lg:text-sm">STAGE : ${Stage}</div>
                </div>
            </div>
			<div class="text-center text-xl my-5 lg:text-4xl font-semibold uppercase">Scores</div>
	  <div id="lastMatch" class="container bg-white dark:bg-gray-800 shadow-lg w-3/4 sm:w-1/2 lg:w-1/2 flex justify-around mx-auto px-5 py-5 my-10 mt-10 rounded lg:justify-evenly">
	  <div class="text-center sm:text-center">
	  <img data-src="${pathImage}" alt="team one"class="lazyload mt-4 fade-in m-auto w-[40%] h-[40%] h-36 brightness-150">
			  <h2 class="text-xs lg:">${teamOne}</h2>
			  </div>
				<h2 class="text-xs my-20 sm: lg:text-2xl   ">${(ScoreOne == null) ?   "" : ScoreOne}</h2>
				<h2 class="text-xs my-20 sm: px-4 lg:text-2xl ">-</h2>
				<h2 class="text-xs my-20 sm:  lg:text-2xl ">${(ScoreTwo == null) ?   "" : ScoreTwo}</h2>
	  <div class="text-center  sm:text-center">
	  <img data-src="${pathImage}" alt="team two" class="lazyload mt-4 fade-in m-auto w-[40%] h-[40%]  h-36 brightness-150">
			  <h2 class="text-xs lg: ">${teamTwo}</h2>

	</div>
		`;
	}
	
	return render();


}

export default detailGame;

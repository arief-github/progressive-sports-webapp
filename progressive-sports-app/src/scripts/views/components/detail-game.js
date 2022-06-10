const detailGame = ({
	teamOne, teamTwo, nameLeague, pathImage, ScoreOne, ScoreTwo, Venue, Date, Status, Stage   }) => {
	   const render = () =>  {
		return `
		<div class=" container shadow-lg w-1/2 grid grid-cols-1 gap-4 content-around rounded-lg px-5 py-5  mx-auto  bg-white  shadow-md  ">
					<div class="text-center  text-4xl mb-5 font-semibold uppercase">Detail Game</div>
                    <div class="truncate text-sm">COMPETITION : ${nameLeague}</div>
                    <div class="truncate text-sm">STATUS :  ${Status}  </div>
                    <div class="truncate text-sm">Venue : ${(Venue == null) ? "No Data" : Venue}</div>
                    <div class="truncate text-sm">Date : ${Date}</div>
					<div class="truncate text-sm">STAGE : ${Stage}</div>
                </div>
            </div>
			<div class="text-center text-4xl my-5 font-semibold uppercase">Scores</div>
	  <div id="lastMatch" class="container bg-white  shadow-md flex justify-evenly mx-auto my-10 mt-10">
	  <div class="text-center text-2xl sm:text-center">
	  <img src="${pathImage}" class="m-auto w-[40%] h-[40%] h-36 brightness-150 ">
			  <h2 class="mt-10 text-xl">${teamOne}</h2>
			  </div>
			  <h2 class="mt-5 text-3xl">${(ScoreOne == null) ?   "" : ScoreOne}</h2>
		  <h2 class="mt-5 text-3xl">-</h2>
		  <h2 class="mt-5 text-3xl">${(ScoreTwo == null) ?   "" : ScoreTwo}</h2>
	  <div class="text-center  text-2xl   sm:text-center">
	  <img src="${pathImage}" class="m-auto w-[40%] h-[40%]  h-36 brightness-150">
			  <h2 class="mt-10 text-xl">${teamTwo}</h2>

	</div>
		`;
	}
	
	return render();


}

export default detailGame;
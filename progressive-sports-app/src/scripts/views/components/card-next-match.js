const cardNextMatch = ({teamOne,teamTwo, pathImage}) => {
	const render = () => {
		return `
        <div class="">
            <div class="card-game mb-6 ml-20 justify-between flex">
              <img class="h-24 w-24 mt-4" src="${pathImage}" alt="country" " />
                <div class="team-names ml-10">
                  <h2 class="mb-4 mt-4">${teamOne}</h2>
                  <h2>${teamTwo}</h2>
                </div>
                <div>
                  <h2 class="mb-4 mt-4"></h2>
                  <h2></h2>
                </div>
            </div>
          </div>
		`;
	}
	
	return render();


}

export default cardNextMatch;
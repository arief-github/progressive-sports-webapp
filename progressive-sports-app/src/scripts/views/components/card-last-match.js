const cardLastMatch = ({ teamOne, teamTwo, scoreOne, scoreTwo, pathImage, idMatch }) => {
    const render = () => {
        return `
        <div class="">
            <div class="card-game mb-6 ml-20 justify-between flex">
              <img class="lazyload fade-in h-24 w-24 mt-4" data-src="${pathImage}" alt="country"" />
                <div class="team-names ml-10">
                  <h2 class="mb-4 mt-4">${teamOne}</h2>
                  <h2>${teamTwo}</h2>
                </div>
                <div>
                  <h2 class="mb-4 mt-4">${scoreOne}</h2>
                  <h2>${scoreTwo}</h2>
                </div>
                <button id="btn-last-match" class="rounded-[10%] w-14 h-14 fill-gray-500 my-auto shadow-md group hover:shadow-inner ">
                <a href="#/matches/${idMatch}">
                <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6 hover:stroke-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </a>
        </button>
            </div>
          </div>
		`;
    }
    return render();
}

export default cardLastMatch;
const cardItemFavorite = ({idTeam, nameTeam, location, stadion, pathImage, clubColor}) => {
	const render = () => {
		return `
		  <div class="item-card w-full dark:bg-gray-800 h-[400px] flex flex-col bg-[#f2f2f2] rounded-[8%] shadow-lg">
			  <div class="side-top w-full h-3/6 max-h-[50%] min-h-[50%] flex items-center bg-white p-4">
			    <img class="lazyload fade-in mx-auto h-full" data-src="${pathImage}" alt="picture team">
			  </div>
			  <div class="side-mid flex pt-2 px-4 h-2/6 w-full items-center">
				  <div class="description min-w-[85%] mr-4 dark:text-white">
				  	<h1 class="truncate text-2xl font-semibold">${nameTeam}</h1>
				  	<h2 class="truncate text-lg mt-[2px] dark:text-white text-gray-700">${location}</h2>
				  	<h3 class="truncate text-md mt-[2px] dark:text-white text-gray-700">${stadion}</h3>
				  </div>
				  <div class="colors-team ml-auto flex flex-col items-center">
				  	${addColorsTeams(clubColor)}
				  </div>
			  </div>
			  <div class="side-bottom w-full h-1/6 mb-2 flex">
			  		<button class="btn-favorite rounded-[15%] w-[30%] h-5/6 dark:bg-gray-800 bg-[#f9f9f9] mx-auto my-auto shadow-md group hover:shadow-inner flex" data="${idTeam}">
						
					</button>
			  		<a href="#/teams/${idTeam}" class="btn-detail rounded-[15%] w-[30%] h-5/6 dark:bg-gray-800 bg-[#f9f9f9] mx-auto my-auto shadow-md group hover:shadow-inner flex">
			  			<svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6 text-gray-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
			  		</a>
			  </div>
		  </div>
		`;
	}
	
	const addColorsTeams = (colors) =>{
		let item = '';
		let maxItem = {
			'start' : 0,
			'stop' : 3,
		};
		colors.forEach((e)=>{
			if(maxItem['start'] != maxItem['stop']){
				let deleteSpaceInText = e.toLowerCase().replace(/\s/g, '');
				let color = (typoColorNames[deleteSpaceInText] != null) ? typoColorNames[deleteSpaceInText] : deleteSpaceInText;
				item += `<div style="background-color : ${color}" class="w-[25px] h-[25px] rounded-[100%] my-[5px] shadow-inner"></div>`
			}
			maxItem['start']++;
		});
		return item;
	};

	const typoColorNames = {
		"navyblue" : "navy",
		"claret" : "#811331",
	}
	
	return render();


}

export default cardItemFavorite;

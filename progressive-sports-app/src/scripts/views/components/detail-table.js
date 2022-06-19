const detailStat = ({
    ScoreFullAway,  ScoreHalfAway,  ScoreFullHome,  ScoreHalfHome, teamOne, teamTwo,  DrawAway, WonAway, LoseAway, DrawHome, WonHome, LoseHome
   }) => {
	   const render = () =>  {
		return `
        <div class="w-full text-xs mx-5 ">${teamOne}</div>
        <div class="w-full text-xs mx-7 ">${WonAway}</div>
        <div class="w-full text-xs mx-7 ">${LoseAway}</div>
        <div class="w-full text-xs hidden mx-7 md:inline">${DrawAway}</div>
        <div class="w-full text-xs hidden mx-5 lg:hidden xl:inline">${(ScoreHalfAway == null) ? "Sedang Berlangsung" : ScoreHalfAway}</div>
        <div class="w-full text-xs hidden mx-5 lg:inline xl:inline">${(ScoreFullAway == null) ? "Sedang Berlangsung" : ScoreFullAway}</div>

        <div class="w-full text-xs mx-5 ">${teamTwo}</div>
        <div class="w-full text-xs mx-7 ">${WonHome}</div>
        <div class="w-full text-xs mx-7 ">${LoseHome}</div>
        <div class="w-full text-xs hidden mx-7 md:inline">${DrawHome}</div>
        <div class="w-full text-xs hidden mx-5 lg:hidden inline xl:inline">${(ScoreHalfHome == null) ? "Sedang Berlangsung" : ScoreHalfHome} </div>
        <div class="w-full text-xs hidden mx-5 lg:inline xl:inline ">${(ScoreFullHome == null) ? "Sedang Berlangsung" : ScoreFullHome}</div>
       
        
		`;
	}
	
	return render();


}

export default detailStat;

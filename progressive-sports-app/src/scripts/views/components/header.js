const header = {
    async init() {
        return ` 
		<header class="flex ">
			  <a href="#" class="flex w-3/4">
			    <img class="inline h-7"  alt="sports logo" src="./images/Progressive-Sport-Logo-Dark.png"/>
			  </a>
			  <ul class="flex w-1/4">
			    <li class="m-auto">
			      <a href="#/">Home</a>
			    </li>
			    <li class="m-auto">
			      <a href="#/favorite-page">Favorite Teams</a>
			    </li>
			    <li class="m-auto">
			      <a href="#/game-page">Game</a>
			    </li>
			    <li class="m-auto">
			      <a href="#">Contact Us</a>
			    </li>
			  </ul>
		</header>
		`;
    },
	
}

export default header;
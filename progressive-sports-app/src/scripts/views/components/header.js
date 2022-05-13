const header = {
    async init() {
        return ` 
		<header class="flex justify-between items-center">
			  <a href="#" class="flex-1">
			    <img class="inline h-7" src="" alt="sports logo" src="../../../assets/img/Progressive-Sport-Logo-Dark.png"/>
			  </a>
			  <ul>
			    <li>
			      <a href="#">Home</a>
			    </li>
			    <li>
			      <a href="#/favoritePage">Favorite Teams</a>
			    </li>
			    <li>
			      <a href="#">Game</a>
			    </li>
			    <li>
			      <a href="#">Contact Us</a>
			    </li>
			  </ul>
		</header>
		`;
    }
}

export default header;
const header = {
    async init() {
        return ` 
			<nav class="bg-white">
			<div class="max-w-6xl mx-auto px-4">
					<div class="flex justify-between space-x-7">
						<div>
							<!-- Website Logo -->
							<a href="#" class="flex items-center py-4 px-2">
								<img src="./images/Progressive-Sport-Logo-Dark.png" alt="Logo">
							</a>
						</div>
						<!-- Primary Navbar items -->
						<div class="hidden md:flex items-center space-x-2">
							<a href="#/" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
							<a href="#/favorite-page" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Favorite Teams</a>
							<a href="#/game-page" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Game</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
						</div>
						<!-- Mobile menu button -->
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>	
					</div>
			</div>
			<!-- mobile menu -->
			<div class="hidden relative mobile-menu">
				<ul class="absolute bg-white w-full">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#/favorite-page" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Favorite Teams</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		</nav>
		`;
    },
    async clickingButton() {
        const button = document.querySelector('button.mobile-menu-button');
        const menu = document.querySelector('.mobile-menu');


        button.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
};

export default header;
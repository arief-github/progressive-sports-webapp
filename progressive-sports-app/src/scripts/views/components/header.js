const header = {
    init() {
        return `
			<nav class="bg-white dark:bg-gray-700">
			<div class="max-w-6xl mx-auto px-4">
					<div class="flex justify-between space-x-7">
						<div>
							<!-- Website Logo -->

							<a href="#" class="flex items-center dark:text-white py-4 px-2 focus:outline-none focus:ring focus:ring-green-500">
								<img src="./images/Progressive-Sport-Logo.webp" alt="Logo">
						</div>
						<!-- Primary Navbar items -->
						<div class="hidden md:flex items-center space-x-2 desktop-navbar focus:outline-none focus:ring focus:ring-green-500">
							<a href="#/" class="py-4 px-2 font-semibold border-b-4 border-green-500 dark:text-white text-green-500 ">Home</a>
							<a href="#/news-page" class="py-4 px-2 dark:text-white text-gray-500 font-semibold hover:text-green-500 transition duration-300">News</a>
							<a href="#/favorite-page" class="py-4 px-2 dark:text-white text-gray-500 font-semibold hover:text-green-500 transition duration-300">Favorite Teams</a>
							<a href="#/game-page" class="py-4 px-2 dark:text-white text-gray-500 font-semibold hover:text-green-500 transition duration-300 ">Game</a>
							<a href="javascript:scrollingDown()" class="scrPy py-4 px-2 dark:text-white text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
						</div>
						<!-- Mobile menu button -->
					<div class="md:hidden flex items-center ">
						<button class="outline-none mobile-menu-button  focus:outline-none focus:ring focus:ring-green-500">
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
			<div class="hidden md:hidden relative mobile-menu z-10">
				<ul class="absolute bg-white w-full focus:outline-none focus:ring focus:ring-green-500">
					<li><a href="#/" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 bg-green-500 text-white">Home</a></li>
					<li><a href="#/favorite-page" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Favorite Teams</a></li>
					<li><a href="#/news-page" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">News</a></li>
					<li><a href="#/game-page" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Game</a></li>
					<li><a href="javascript:scrollingDown()" class="scrPy block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		</nav>
		`;
    },

    afterRender() {
        this.clickingButton();
        this.changeActiveClass();
        this.scrollingDown();
    },
    clickingButton() {
        const button = document.querySelector('button.mobile-menu-button');
        const menu = document.querySelector('.mobile-menu');
        button.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    },

    changeActiveClass() {
        $('.desktop-navbar a').click((event) => {
            $('.desktop-navbar').children().removeClass('border-b-4 border-green-500 text-green-500')
            $(event.target).toggleClass('border-b-4 border-green-500 text-green-500')
        })

        $('.mobile-menu ul li').click((event) => {
            $('.mobile-menu ul li').children().removeClass('bg-green-500 text-white')
            console.log(event.target)
            $(event.target).toggleClass('bg-green-500 text-white')
        })

    },

    scrollingDown() {
        $('.scrPy').click(function() {
            let y = $(window).scrollTop();
            $('html, body').animate({ scrollTop: y + $(document).height() }, 1000)
        })
    },
};

export default header;
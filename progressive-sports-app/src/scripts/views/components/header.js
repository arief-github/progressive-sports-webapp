const header = {
    init() {
        return ` 
			<nav class="bg-white dark:bg-gray-700">
			<div class="max-w-6xl mx-auto px-4">
					<div class="flex justify-between space-x-7">
						<div>
							<!-- Website Logo -->
							<a href="#" class="flex items-center dark:text-white py-4 px-2 focus:outline-none focus:ring focus:ring-green-500">
								<img src="./images/Progressive-Sport-Logo-Dark.png" alt="Logo">
							</a>
						</div>
						<!-- Primary Navbar items -->
						<div class="hidden md:flex items-center space-x-2 desktop-navbar focus:outline-none focus:ring focus:ring-green-500">
							<a href="#/" class="py-4 px-2 font-semibold border-b-4 border-green-500 dark:text-white text-green-500 ">Home</a>
							<a href="#/favorite-page" class="py-4 px-2 dark:text-white text-gray-500 font-semibold hover:text-green-500 transition duration-300">Favorite Teams</a>
							<a href="#/game-page" class="py-4 px-2 dark:text-white text-gray-500 font-semibold hover:text-green-500 transition duration-300 ">Game</a>
							<a href="javascript:scrollingDown()" class="scrPy py-4 px-2 dark:text-white text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
							<button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
							    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
							    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
							</button>
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
					<li><a href="#/game-page" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Game</a></li>
					<li><a href="javascript:scrollingDown()" class="scrPy block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
					<button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
					    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
					    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
					</button>
				</ul>
			</div>
		</nav>
		`;
    },

    afterRender() {
        this.clickingButton();
        this.changeActiveClass();
        this.scrollingDown();
        this.settingDarkMode();
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

    // Change the icons inside the button based on previous settings
    settingDarkMode() {
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        const themeToggleButton = document.getElementById('theme-toggle');

        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
        }

        themeToggleButton.addEventListener('click', function() {
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light')
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        })


    }

};

export default header;
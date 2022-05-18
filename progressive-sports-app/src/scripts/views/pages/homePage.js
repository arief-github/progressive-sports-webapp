import heroImage from '../components/hero-image.js';
import header from '../components/header.js';
import footer from '../components/footer.js';

const homePage = {
    async init() {
        return `
		<div id="hero-image"></div>
		<h1 class="text-center mt-2 text-2xl font-bold underline  md:text-xl md:font-semibold ">LEAGUES</h1>
		<br>
		<div class="container flex justify-start items-strecth flex-wrap">
			  <div class="card-league mb-6">
			     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			</div>
			<h1 class="text-center mt-2 text-2xl font-bold underline md:text-xl md:font-semibold ">TOURNAMENT</h1>
		<div class="container flex justify-start items-strecth flex-wrap">
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
			  <div class="card-league mb-6">
			    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga">
			    <h2>Laliga Santander</h2>
			    <p class="mt-3">
			      Spain
			    </p>
			    <p>Season 2021/2022</p>
			  </div>
		</div>
		`;
    }, 
    async afterRender() {
        document.getElementById('hero-image').innerHTML = heroImage;

        await header.clickingButton();
        await footer.formSubmitting();
        await footer.closeAlert();
    }
}


export default homePage;
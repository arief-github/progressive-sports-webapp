
const gamePage = {
	async init(){
		return `
    <div class="relative">
    <p class="mb-8 text-center font-bold">GAMES</p>
    <p class="ml-20 mb-8 font-bold">Last Macth</p>
  </div>
  
  <div class="grid grid-cols-2">
    <div class="card-game mb-6 ml-20 justify-between flex">
      <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
        <div class="ml-10">
          <h2>Espanyol</h2>
          <h2>Villareal</h2>
        </div>
        <div class="ml-10">
          <h2>2</h2>
          <h2>2</h2>
        </div>
    </div>
    <div class="card-game mb-6 justify-between flex">
      <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
        <div class="ml-10">
          <h2>Espanyol</h2>
          <h2>Villareal</h2>
        </div>
        <div class="ml-10">
          <h2>2</h2>
          <h2>2</h2>
        </div>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <div class="card-game mb-6 justify-between flex">
      <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
        <div>
          <h2>Espanyol</h2>
          <h2>Villareal</h2>
        </div>
        <div class="ml-10">
          <h2>2</h2>
          <h2>2</h2>
        </div>
    </div>
    <div class="card-game mb-6 justify-between flex">
      <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
        <div>
          <h2>Espanyol</h2>
          <h2>Villareal</h2>
        </div>
        <div class="ml-10">
          <h2>2</h2>
          <h2>2</h2>
        </div>
    </div>
    <div class="">
      <p class="ml-20 mb-8 font-bold">Next Macth</p>
      <div class="card-game mb-6 justify-between flex">
        <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
          <div class="ml-10">
            <h2>Espanyol</h2>
            <h2>Villareal</h2>
          </div>
          <div class="ml-10">
            <h2>2</h2>
            <h2>2</h2>
          </div>
      </div>
    </div>
  </div>
  
`;
	}
}


export default gamePage;
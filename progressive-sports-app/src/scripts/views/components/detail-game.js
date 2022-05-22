const detailGame = ({teamOne, teamTwo, nameLeague}) => {
	const render = () => {
		return `
        <p class="mb-10 text-center font- text-2xl uppercase ">${nameLeague}</p>
	 </div>
	  <div id="lastMatch" class="container flex justify-around mx-auto ">
		<div class="text-center text-2xl sm:text-center  md:flex  ">
			  <img class="h-36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
				<h2 class="mt-10  ">${teamOne}</h2>
		</div>
			<h2 class="text-2xl mt-10">VS</h2>
		<div class="text-center  text-2xl   sm:text-center   md:flex flex-row-reverse ">
			<img class="h-36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/175px-LaLiga_Santander_logo_%28stacked%29.svg.png" alt="laliga" />
				<h2 class="mt-10  ">${teamTwo}</h2>
		</div>
	</div>
	  <div class="relative ">
		<p class="mb-20 text-center  text-4xl mt-10 font-medium uppercase">Discussion</p>
			<div class="flex">
				  <div class="sm:flex mx-auto">
					<div class="card-comment mb-6">
						  <h2 class="font-bold">Raditya Dika</h2>
							  <p class="mt-8">Hala Madrid</p>
			</div>
				<div class="card-comment mb-6">
				  <h2 class="font-bold">Raditya Dika</h2>
					  <p class="mt-8">Hala Madrid</p>
				</div>
				<div class="card-comment mb-6">
					<h2 class="font-bold">Raditya Dika</h2>
						<p class="mt-8">Hala Madrid</p>
				</div>
				<form>
					<div class="mb-4">
						<label for="name" class="mb-2">Name</label>
							<input type="name" id="name" class="border border-black text-gray-900  rounded-lg focus:ring-black focus:border-black block w-full p-1 dark:bg-white" placeholder="Input Name" required>
								</div>
					<div class="mb-6">
						<label for="message" class="mb-2 block text-sm font-medium "">Comment</label>
							<textarea id="message" rows="4" class="block w-80 rounded-lg border border-black p-1 text-gray-900 focus:border-black focus:ring-black dark:bg-white" placeholder="Leave a comment..."></textarea>
								</div>
							<button type="submit" class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-20">Submit</button>
				</form>
			</div>
		</div>
		`;
	}
	
	return render();


}

export default detailGame;
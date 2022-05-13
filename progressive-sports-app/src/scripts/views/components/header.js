const header = {
	async init(){
		return `<div class="w-full h-20 bg-blue-300 px-8 text-center text-white flex">
					<a href="#/" class="w-40 h-auto m-auto p-6 bg-red-200">Home</a>
					<a href="#/favorite" class="w-40 h-auto m-auto p-6 bg-red-200">Favorite</a>
					<a href="#/detail-league" class="w-40 h-auto m-auto p-6 bg-red-200">Detail League</a>
				</div>`;
	}
}

export default header;
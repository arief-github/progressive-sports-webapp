const footer = {
    async init() {
        return `  
		<footer class="flex justify-between flex-wrap md:w-full">
  			<div class="footer-col sm:mb-4">
        		<ul class="list-none">
					<li>
						<h3>Progressive Sport</h3>
					</li>
					<li>
						Jalan Pahlawan
					</li>
					<li>
						progressive-sport@gmail.com
					</li>
					<li>
						CPNG-81
					</li>
		    	</ul>
			</div>
			<div class="footer-col">
				<h3>Contact Us</h3>
		 		<form>
				  <div class="mb-6">
				    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
				    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
				  </div>
				  <div class="mb-6">
				    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
				<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
				  </div>
				  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
			</form>
			</div>
			</footer>
		`;
    }
}

export default footer;
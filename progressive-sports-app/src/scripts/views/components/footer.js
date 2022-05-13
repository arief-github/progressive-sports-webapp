const footer = {
	async init(){
		return `  
		<footer class="flex justify-between">
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

		    <form>
		      <h3 class="mb-6">Contact Us</h3>
		      <div class="mb-6">
		           <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email">
		      </div>
		      <div class="mb-6">
		        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="message"></textarea> 
		      </div>
		      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
		    </form>
  		</footer>
		`;
	}
}

export default footer;
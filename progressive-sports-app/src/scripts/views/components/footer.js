const footer = {
     init() {
        return `
     	<div id="alert-3" class=" hidden alert-success flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
		  <svg class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
		  <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
		    Thank You! 👍 Your message has been accepted.
		  </div>
		  <button type="button" class="alert-del ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
		    <span class="sr-only">Close</span>
		    <svg class=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
		  </button>
		</div>
		<footer class="flex justify-around flex-wrap md:w-full bg-full bg-cover" style="background-image:url('./images/footer.jpg');">
  			<div class="footer-col mt-3 sm:mb-4">
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
			<div class="footer-col mt-3">
				<h3>Contact Us</h3>
		 		<form name="kotak-informasi">
				  <div class="mb-6">
				    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
				    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
				  </div>
				  <div class="mb-6">
				    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
				<textarea id="message" name="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
				  </div>
				  <button type="submit" class="btn-send text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
			</form>
			</div>
		</footer>
		`;
    },
     formSubmitting() {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzj4aHimj0V43dxno8mmTvb-0lMgb7C58GNlpt65BBFusAmt0iT6zPjm-mTvM5TIqV7tA/exec';
        const form = document.forms['kotak-informasi'];
        const btnSend = document.querySelector('.btn-send');
        const closeAlert = document.querySelector('.alert-del');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            $(form).find('button.btn-send').prop('disabled',true);
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    console.log('Success!', response);

                    // success alert
                    $('.alert-success').toggleClass('hidden');
                    $('.alert-success')
                    	.find('button.alert-del')
                    		.on('click',()=>{
                    			$('.alert-success').addClass('hidden')
                    		}
                    	);

                    form.reset();
		            $(form).find('button.btn-send').prop('disabled',false);
                })
                .catch((error) => console.log('Error!', error.message))
        });
    },
     afterRender(){
		this.formSubmitting();
	},    
}

export default footer;
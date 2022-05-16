const footer = {
    async init() {
        return `  
		<footer class="flex justify-between flex-wrap md:w-full">
  			<div class="footer-col sm:mb-6">
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
		  <form class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<div>
				<label> Full Name </label>
				<input type="text" name="name" placeholder="Full Name" />
			</div>
			<div >
				<label> Email Address </label>
				<input type="email" name="email" placeholder="Email Address" />
			</div>
			<div class="col-start-2 row-start-1 row-end-3">
				<label> Message </label>
				<textarea name="message" placeholder="Your Message" rows="5"></textarea>
			</div>
			<button class="col-span-full">Send a Message</button>
			</form>
			</div>
			</footer>
		`;
    }
}

export default footer;
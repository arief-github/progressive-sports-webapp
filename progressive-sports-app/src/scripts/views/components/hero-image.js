class HeroImage extends HTMLElement {
	connectedCallback(){
		this.render();
	}

	render() {
		this.innerHTML = ` 
			<header class="mb-6">
			 <div class="w-full bg-center bg-cover"
				    style="background-image: url(https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);">
				    <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
				      <div class="text-center">
				        <div class="container px-4 mx-auto">
				          <div class="max-w-4xl mx-auto text-center">
				            <span class="text-gray-200 font-semibold uppercase tracking-widest">SPORTS APP</span>
				            <h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Progressive Sports</h2>
				            <p class="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
				              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit cum iure qui, nostrum at sapiente
				              ducimus.
				            </p>
				            <a class="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
				              href="#">start explore</a>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
			</header>
		`;
	}
}

customElements.define('hero-image', HeroImage);
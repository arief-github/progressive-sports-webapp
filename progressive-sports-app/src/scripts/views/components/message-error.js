
class MessageError extends HTMLElement{
	async connectedCallback() {
		this.innerHTML = await this.render();
	}

	async render(){
		return `
			<section class="w-full h-screen flex">
				<div class="m-auto flex flex-col">
					<svg xmlns="http://www.w3.org/2000/svg" class="text-red-400 m-auto h-[5%] w-[5%]" viewBox="0 0 20 20" fill="currentColor">
					  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
					</svg>
					<p class="m-auto text-[3vw] md:text-[1.5vw] text-center  text-semibold text-red-400">Something wrong!! please reload this page because ${this.getAttribute("message") || null} </p>
				</div>
			</section>
		`
	}


}




customElements.define('message-error',MessageError);
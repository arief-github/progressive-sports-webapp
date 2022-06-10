class MessageNull extends HTMLElement{
	async connectedCallback() {
		this.innerHTML = await this.render();
	}

	async render(){
		return `
			<section class="w-full h-screen flex">
				<div class="m-auto flex flex-col">
					<svg xmlns="http://www.w3.org/2000/svg" class="text-gray-300 m-auto h-[5%] w-[5%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					  <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
					<p class="m-auto text-[3vw] md:text-[1.5vw] text-center  text-semibold text-gray-300">Data Kosong !!.</p>
				</div>
			</section>
		`
	}


}




customElements.define('message-null',MessageNull);
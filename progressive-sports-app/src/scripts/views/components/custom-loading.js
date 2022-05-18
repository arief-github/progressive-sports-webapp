class Loading extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <style>
                .lds-ring {
                  width: 0px;
                  height: 0px;
                  margin: auto;
                  padding: 25% 0;
                }
                .lds-ring div {
                  box-sizing: border-box;
                  display: block;
                  position: absolute;
                  width: 50px;
                  height: 50px;
                  margin: 8px;
                  border: 8px solid #fff;
                  border-radius: 50%;
                  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                  border-color: black transparent rgb(34 197 94) transparent;
                }
                .lds-ring div:nth-child(1) {
                  animation-delay: -0.45s;
                }
                .lds-ring div:nth-child(2) {
                  animation-delay: -0.3s;
                }
                .lds-ring div:nth-child(3) {
                  animation-delay: -0.15s;
                }
                @keyframes lds-ring {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
            </style>`;
  }
}

customElements.define('custom-loading', Loading);

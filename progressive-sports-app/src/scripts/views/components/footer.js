import Toastify from 'toastify-js';

const footer = {
    init() {
        return `
        <footer class="flex relative justify-around flex-wrap md:w-full bg-full bg-cover bg-fixed" style="background-image:url('./images/footer.webp');">
            <div class="footer-col mt-3 sm:mb-4">
                <ul class="list-none inline">
                    <li>
                        <h3 class="dark:text-green-600">Progressive Sport</h3>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Jalan Pahlawan
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        progressive-sport@gmail.com
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        CPNG-81
                    </li>
                </ul>
            </div>
             <div class="absolute left-0 bottom-0 text-green-700">
                <button class="scrollTop">
                    <svg class="w-14 h-14 dark:text-white" fill="text-green-700" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
                </button>       
            </div> 
            <div class="footer-col mt-3">
                <h3 class="dark:text-green-600">Contact Us</h3>
                <form name="kotak-informasi">
                  <div class="mb-6 w-auto">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring focus:ring-green-500" placeholder="name@gmail.com" required>
                  </div>
                  <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id=z"message" name="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring focus:ring-green-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" class="btn-send text-white mb-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-80 sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-500 dark: focus:ring focus:ring-green-500">Submit</button>
                <button disabled type="button" class="hidden btn-loading text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 inline-flex items-center">
                    <svg role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Loading...
                </button>
            </form>
            </div>     
        </footer>
        `;
    },
    formSubmitting() {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzj4aHimj0V43dxno8mmTvb-0lMgb7C58GNlpt65BBFusAmt0iT6zPjm-mTvM5TIqV7tA/exec';
        const form = document.forms['kotak-informasi'];
        const btnSend = document.querySelector('.btn-send');
        const btnLoading = document.querySelector('.btn-loading');
        const closeAlert = document.querySelector('.alert-del');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // when submit button has clicked, show btn loading, hide btn submit
            btnLoading.classList.toggle('hidden');
            btnSend.classList.toggle('hidden');

            $(form).find('button.btn-send').prop('disabled', true);
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    console.log('Success!', response);

                    btnLoading.classList.toggle('hidden');
                    btnSend.classList.toggle('hidden');

                    // success alert
                    let message = `Thank You! 👍 Your message has been accepted.`;
                    Toastify({
                        text: message,
                        duration: 3000,
                        destination: "#/",
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function() {} // Callback after click
                    }).showToast();

                    this.showNotification(message);

                    form.reset();
                    $(form).find('button.btn-send').prop('disabled', false);
                })
                .catch((error) => console.log('Error!', error.message))
        });
    },
    scrollingTop() {
        $('button.scrollTop').click(function() {
            $('html,body').animate({ scrollTop: 0 }, "slow");
            return false;
        })
    },
    showNotification(message) {
        const title = "Progressive Web Apps";
        const options = {
            body: message,
            icon: "favicon.png",
            badge: "favicon.png",
        }

        if (Notification.permission === 'granted') {
            navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification(title, options);
            })
        } else {
            console.error("Feature Notification Not Allowed")
        }
    },
    afterRender() {
        this.formSubmitting();
        this.scrollingTop();
    },
}

export default footer;
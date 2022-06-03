import detailGame from "../components/detail-game";
import FootballDataApi from "../../data/footballDataApi";
import UrlParser from '../../routes/url-parser';
import db from '../../data/commentHelperFirebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';


const detailGamePage = {
    async init() {
        return `
      <div class="detail-games relative">
        <p class="mb-20 text-center text-4xl  uppercase">Last Match</p>
      </div> 

       <div class="relative w-80 m-auto">
        <p class="mb-20 text-center  text-4xl mt-10 font-medium uppercase">Discussion</p>
        <div class="allComments mx-auto"></div>
             <div class="flex">           
                <form class = "m-auto form-review" method="POST">
                    <div class="mb-4">
                        <label for="name" class="mb-2">Name</label>
                            <input type="name" id="name" class="input-name border border-black text-gray-900  rounded-lg focus:ring-black focus:border-black block w-full p-1 dark:bg-white" placeholder="Input Name" required>
                                </div>
                    <div class="mb-6">
                        <label for="message" class="mb-2 block text-sm font-medium "">Comment</label>
                            <textarea id="message" rows="4" class="block w-80 rounded-lg border border-black p-1 text-gray-900 focus:border-black focus:ring-black dark:bg-white" placeholder="Leave a comment..."></textarea>
                                </div>
                            <button type="submit" class="btnSubmit text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-20">Submit</button>
                </form>
            </div>
        </div>
    `;
    },
    async afterRender() {
        await this.detailMatch();
        await this.showDiscussionCard();
        await this.getData({id:this.getId()});
    },
    getId() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        return url.id;
    },
    async detailMatch() {
        const footballDataApi = new FootballDataApi();
        await footballDataApi.getMatchById({ id: this.getId() })
            .then((value) => {
                console.log(value);
                $("custom-loading").remove()
                let match = value.match;
                document.querySelector('.detail-games').innerHTML += detailGame({
                    nameLeague: match.competition.name,
                    teamOne: match.homeTeam.name,
                    teamTwo: match.awayTeam.name,
                    pathImage: match.competition.area.ensignUrl,
                    scoreHomeTeam: match.score.fullTime.homeTeam,
                    scoreAwayTeam: match.score.fullTime.awayTeam,
                });
            });

    },
    async showDiscussionCard() {
        const nameInput = document.querySelector('#name');
        const discussInput = document.querySelector('#message');
        const btnSubmit = document.querySelector('.btnSubmit');


        btnSubmit.addEventListener('click', (event) => {
            event.preventDefault();

            // validation, discuss input can't be empty
            if (nameInput.value === '' || discussInput.value === '') {
                alert(`empty input isn't allowed`);
                nameInput.value = '';
                discussInput.value = '';
            } else {
                this.postData({ id: this.getId(), name: nameInput.value, comment: discussInput.value })
                nameInput.value = '';
                discussInput.value = '';
            }
        })
    },
    async postData({ id, name, comment }) {
        try {
            const docRef = await addDoc(collection(db, "discuss"), {
                id,
                name,
                comment,
            });
            console.log("Document written with ID: ", docRef.id);
            document.querySelector('.allComments').innerHTML +=
                `
                  <div id="${id} card-comment shadow-lg mb-6 w-48">
                    <div class="title-comment flex justify-center">
                      <div class="rounded-lg bg-white p-6 shadow-lg w-48">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        <h2 class="mb-2 font-bold text-gray-800">${name}</h2>
                        <p class="text-gray-700">${comment}</p>
                         <button class="deleteComment">
                           <span class="bg-red-light mt-1 inline-block rounded-full p-1 pb-0">
                          <svg fill="red" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
                          </svg>
                        </span>
                        </button>
                      </div>
                    </div>
                  </div>`
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    },
    async getData({ id }) {
        const querySnapshot = await getDocs(collection(db, "discuss"))
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} =>`, doc.data());
            const commentData = doc.data();
            if (commentData.id === id) {
                document.querySelector('.allComments').innerHTML += `
                  <div id="${commentData.id} card-comment shadow-lg mb-6 w-48">
                    <div class="title-comment flex justify-center">
                      <div class="rounded-lg bg-white p-6 shadow-lg w-48">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        <h2 class="mb-2 font-bold text-gray-800">${commentData.name}</h2>
                        <p class="text-gray-700">${commentData.comment}</p>
                         <button class="deleteComment">
                           <span class="bg-red-light mt-1 inline-block rounded-full p-1 pb-0">
                          <svg fill="red" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
                          </svg>
                        </span>
                        </button>
                      </div>
                    </div>
                  </div>`
            }

        })
    }
}

export default detailGamePage;
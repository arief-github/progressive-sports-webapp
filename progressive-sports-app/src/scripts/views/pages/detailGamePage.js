
import detailGame from "../components/detail-game";
import detailStat from "../components/detail-table";
import FootballDataApi from "../../data/footballDataApi";
import UrlParser from '../../routes/url-parser';
import db from '../../data/commentHelperFirebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { Timestamp } from 'firebase/firestore';
import heroImage from "../components/hero-image";
import heroGame from "../components/hero-game";
import Toastify from 'toastify-js'


const detailGamePage = {
    async init() {
        return `
        <div id="hero-image"></div>
      <div class="detail-games relative">
      </div> 
      <p class="text-center text-xl lg:text-4xl mb-10 font-semibold uppercase">Head-To-Head</p>
      <div class="list-standings w-full h-auto px-8 mt-4" >
      <div class="item-title w-3/4 sm:w-1/2 lg:w-1/2 h-auto mx-auto  grid gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 bg-green-400 justify-center text-white">
          <div class="w-full text-xs mx-5 lg:text-sm">Team</div>
          <div class="w-full text-xs mx-5 lg:text-sm">Won</div>
          <div class="w-full text-xs mx-5 lg:text-sm">Lose</div>
          <div class="w-full text-xs hidden mx-5 md:inline lg:text-sm">Draw</div>
          <div class="w-full text-xs hidden lg:hidden xl:inline text-sm">Half Time</div>
          <div class="w-full text-xs hidden lg:inline xl:inline text-sm">Full Time</div>
      </div>
      <div class="item-list w-3/4 sm:w-1/2 lg:w-1/2 h-auto py-2 mx-auto shadow-md  grid gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 bg-green-200 justify-center text-black">
  </div>
  </div>
  </div>
       <div class="form relative w-80 m-auto">
        <p class="mb-20 text-center text-xl lg:text-4xl mt-10 font-medium uppercase">Discussion</p>
        <div class="allComments mx-auto"></div>
             <div class="flex">           
                <form class = "m-auto form-review" method="POST">
                    <div class="mb-4">
                        <label for="name" class="mb-2">Name</label>
                            <input type="name" id="name" class="input-name border border-black text-gray-900  rounded-lg focus:ring-black focus:border-black block w-full p-1 dark:bg-white" placeholder="Input Name" required>
                                </div>
                    <div class="mb-6">
                        <label for="message" class="mb-2 block text-sm font-medium "">Comment</label>
                            <textarea id="message" maxlength="255" rows="4" class="block w-80 rounded-lg border border-black p-1 text-gray-900 focus:border-black focus:ring-black dark:bg-white" placeholder="Leave a comment... Maximal 255 Characters"></textarea>
                                </div>
                            <button type="submit" class="btnSubmit text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-20">Submit</button>
                </form>
            </div>
        </div>
    `;
    },
    async afterRender() {
        document.getElementById('hero-image').innerHTML = heroGame;
        await this.detailMatch();
        await this.detailItem();
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
                
                $("custom-loading").remove()
                let match = value.match;
                document.querySelector('.detail-games').innerHTML += detailGame({
                    nameLeague: match.competition.name,
                    teamOne: match.homeTeam.name,
                    teamTwo: match.awayTeam.name,
                    pathImage: match.competition.area.ensignUrl,
                    ScoreTwo: match.score.fullTime.awayTeam,
                    ScoreOne: match.score.fullTime.homeTeam,
                    Status: match.status,
                    Stage: match.stage,
                    Venue: match.venue,
                    Date: match.utcDate

                });
            })
            .catch((e)=>{
                $("custom-loading").remove()
                if(e.status == 0){
                  document.querySelector('.detail-games').innerHTML = `<message-error message="Limit Request waiting 1 minute" class="col-span-full"></message-error>`;
                  document.querySelector('.form').innerHTML = "";
                }else{
                  document.querySelector('.detail-games').innerHTML = `<message-error message="${e.statusText}" class="col-span-full"></message-error>`;
                  document.querySelector('.form').innerHTML = "";
                }
            });

    },
    async detailItem() {
      const footballDataApi = new FootballDataApi();
      await footballDataApi.getMatchById({ id: this.getId() })
          .then((value) => {
              
              $("custom-loading").remove()
              try{
              let match = value.match;
                  document.querySelector('.item-list').innerHTML += detailStat({
                      nameLeague: match.competition.name,
                      teamOne: match.homeTeam.name,
                      teamTwo: match.awayTeam.name,
                      pathImage: match.competition.area.ensignUrl,
                      ScoreFullAway: match.score.fullTime.awayTeam,
                      ScoreFullHome: match.score.fullTime.homeTeam,
                      ScoreHalfAway: match.score.halfTime.awayTeam,
                      ScoreHalfHome: match.score.halfTime.homeTeam,
                      DrawAway : value.head2head.awayTeam.draws || '?',
                      WonAway : value.head2head.awayTeam.wins || '?',
                      LoseAway : value.head2head.awayTeam.losses || '?',
                      DrawHome : value.head2head.homeTeam.draws || '?',
                      WonHome : value.head2head.homeTeam.wins || '?',
                      LoseHome : value.head2head.homeTeam.losses || '?'

                  });
              }catch(e){
                console.log(e)
              }
          })
          .catch((e)=>{
              $("custom-loading").remove()
              if(e.status == 0){
                document.querySelector('.detail-games').innerHTML = `<message-error message="Limit Request waiting 1 minute" class="col-span-full"></message-error>`;
                document.querySelector('.form').innerHTML = "";
              }else{
                document.querySelector('.detail-games').innerHTML = `<message-error message="${e.statusText}" class="col-span-full"></message-error>`;
                document.querySelector('.form').innerHTML = "";
              }
          });

  },
    async showDiscussionCard() {
        const nameInput = document.querySelector('#name');
        const discussInput = document.querySelector('#message');
        const btnSubmit = document.querySelector('.btnSubmit');


        btnSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            Toastify({
              text: "successfully added a comment",
              duration: 3000,
              destination: "#/favorite-page",
              gravity: "top", // `top` or `bottom`
              position: "center", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function(){} // Callback after click
            }).showToast();

            // validation, discuss input can't be empty
            if (nameInput.value === '' || discussInput.value === '') {
                alert(`empty input isn't allowed`);
                nameInput.value = '';
                discussInput.value = '';
            } else {
                this.postData({ id: this.getId(), name: nameInput.value, comment: discussInput.value, time: new Date(Timestamp.now().seconds * 1000).toLocaleDateString() })
                nameInput.value = '';
                discussInput.value = '';
            }
        })
    },
    async postData({ id, name, comment, time }) {
        try {
            const docRef = await addDoc(collection(db, "discuss"), {
                id,
                name,
                comment,
                time,
            });
            document.querySelector('.allComments').innerHTML +=
                `
                  <div id="${id} card-comment shadow-lg mb-6">
                    <div class="title-comment flex justify-center">
                      <div class="rounded-lg bg-white dark:bg-gray-700 p-6 shadow-lg w-80 border-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        <span>${time}</span>
                        <h2 class="mb-2 font-bold text-gray-800 dark:text-white">${name}</h2>
                        <p class="text-gray-700 dark:text-white">${comment}</p>
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
            const commentData = doc.data();
            if (commentData.id === id) {
                document.querySelector('.allComments').innerHTML += `
                  <div id="${commentData.id} card-comment shadow-lg">
                    <div class="title-comment flex justify-center">
                      <div class="rounded-lg bg-white dark:bg-gray-700 p-6 shadow-lg w-80 border-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        <span>${commentData.time}</span>
                        <h2 class="mb-2 font-bold text-gray-800 dark:text-white">${commentData.name}</h2>
                        <p class="text-gray-700 dark:text-white">${commentData.comment}</p>
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

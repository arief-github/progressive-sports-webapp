import heroImage from '../components/hero-image'
import cardItemFavorite from '../components/card-item-favorite'

const favoritePage = {
    async init() {
        return `
			<div class="favorite-page w-full h-auto ">
				<div id="hero-image"></div>
				<div class="title flex sm:flex-row font-semibold ml-6 text-2xl sm:items-center">
					<div class="title-favorite-teams my-auto flex items-center w-2/4 ">
							<svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
							</svg>
						<span class="my-auto ml-2 text-xl">
							Your Favorite Teams
						</span>
					</div>
					<div class="search-favorite-teams sm:ml-auto mr-6 flex w-2/4">
						<div class="ml-auto flex items-center border border-gray-300 w-4/4 sm:2/4 shadow-inner rounded-md ">
							<button id="btn-search-teams" class="hover:shadow-inner m-auto flex items-center p-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</button>
							<input type="text" id="search-team" class="w-5/6  text-xl sm:ml-auto hidden focus:outline-none" placeholder="Search Team">
						</div>
					</div>
				</div>
				<div id="list-teams" class="list-teams w-full h-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				</div>
			</div>`;
    },

    async afterRender() {
        document.querySelector('#hero-image').innerHTML += heroImage;
        await this.createDataDummy().then((e) => {
            e.forEach((e) => {
                let spitClubColors = e.clubColors.split(" / ");
                document.querySelector('.list-teams').innerHTML += cardItemFavorite({
                    nameTeam: e.shortName,
                    location: e.address,
                    stadion: e.venue,
                    pathImage: e.crestUrl,
                    clubColor: spitClubColors,
                });

            })
        });

        await this.domSearchTeam();
        await this.domShowFormSeach();
    },

    async createDataDummy() {
        const data = await JSON.parse(`{
		    "count": 20,
		    "filters": {},
		    "competition": {
		        "id": 2021,
		        "area": {
		            "id": 2072,
		            "name": "England"
		        },
		        "name": "Premier League",
		        "code": "PL",
		        "plan": "TIER_ONE",
		        "lastUpdated": "2022-03-20T08:58:54Z"
		    },
		    "season": {
		        "id": 733,
		        "startDate": "2021-08-13",
		        "endDate": "2022-05-22",
		        "currentMatchday": 37,
		        "winner": null
		    },
		    "teams": [
		        {
		            "id": 57,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Arsenal FC",
		            "shortName": "Arsenal",
		            "tla": "ARS",
		            "crestUrl": "https://crests.football-data.org/57.png",
		            "address": "75 Drayton Park London N5 1BU",
		            "phone": "+44 (020) 76195003",
		            "website": "http://www.arsenal.com",
		            "email": "info@arsenal.co.uk",
		            "founded": 1886,
		            "clubColors": "Red / White",
		            "venue": "Emirates Stadium",
		            "lastUpdated": "2022-02-10T19:48:56Z"
		        },
		        {
		            "id": 58,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Aston Villa FC",
		            "shortName": "Aston Villa",
		            "tla": "AVL",
		            "crestUrl": "https://crests.football-data.org/58.png",
		            "address": "Villa Park Birmingham B6 6HE",
		            "phone": "+44 (0121) 3272299",
		            "website": "http://www.avfc.co.uk",
		            "email": null,
		            "founded": 1872,
		            "clubColors": "Claret / Sky Blue",
		            "venue": "Villa Park",
		            "lastUpdated": "2022-04-03T16:22:14Z"
		        },
		        {
		            "id": 61,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Chelsea FC",
		            "shortName": "Chelsea",
		            "tla": "CHE",
		            "crestUrl": "https://crests.football-data.org/61.png",
		            "address": "Fulham Road London SW6 1HS",
		            "phone": "+44 (0871) 9841955",
		            "website": "http://www.chelseafc.com",
		            "email": null,
		            "founded": 1905,
		            "clubColors": "Royal Blue / White",
		            "venue": "Stamford Bridge",
		            "lastUpdated": "2022-02-10T19:24:40Z"
		        },
		        {
		            "id": 62,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Everton FC",
		            "shortName": "Everton",
		            "tla": "EVE",
		            "crestUrl": "https://crests.football-data.org/62.png",
		            "address": "Goodison Park Liverpool L4 4EL",
		            "phone": "+44 (0871) 6631878",
		            "website": "http://www.evertonfc.com",
		            "email": "everton@evertonfc.com",
		            "founded": 1878,
		            "clubColors": "Blue / White",
		            "venue": "Goodison Park",
		            "lastUpdated": "2022-02-10T19:47:42Z"
		        },
		        {
		            "id": 64,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Liverpool FC",
		            "shortName": "Liverpool",
		            "tla": "LIV",
		            "crestUrl": "https://crests.football-data.org/64.png",
		            "address": "Anfield Road Liverpool L4 0TH",
		            "phone": "+44 (0844) 4993000",
		            "website": "http://www.liverpoolfc.tv",
		            "email": "customercontact@liverpoolfc.tv",
		            "founded": 1892,
		            "clubColors": "Red / White",
		            "venue": "Anfield",
		            "lastUpdated": "2022-02-10T19:30:22Z"
		        },
		        {
		            "id": 65,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Manchester City FC",
		            "shortName": "Man City",
		            "tla": "MCI",
		            "crestUrl": "https://crests.football-data.org/65.png",
		            "address": "SportCity Manchester M11 3FF",
		            "phone": "+44 (0870) 0621894",
		            "website": "https://www.mancity.com",
		            "email": "mancity@mancity.com",
		            "founded": 1880,
		            "clubColors": "Sky Blue / White",
		            "venue": "Etihad Stadium",
		            "lastUpdated": "2022-02-10T19:48:37Z"
		        },
		        {
		            "id": 66,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Manchester United FC",
		            "shortName": "Man United",
		            "tla": "MUN",
		            "crestUrl": "https://crests.football-data.org/66.png",
		            "address": "Sir Matt Busby Way Manchester M16 0RA",
		            "phone": "+44 (0161) 8688000",
		            "website": "http://www.manutd.com",
		            "email": "enquiries@manutd.co.uk",
		            "founded": 1878,
		            "clubColors": "Red / White",
		            "venue": "Old Trafford",
		            "lastUpdated": "2022-02-10T19:27:46Z"
		        },
		        {
		            "id": 67,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Newcastle United FC",
		            "shortName": "Newcastle",
		            "tla": "NEW",
		            "crestUrl": "https://crests.football-data.org/67.png",
		            "address": "Sports Direct Arena Newcastle upon Tyne NE1 4ST",
		            "phone": null,
		            "website": "http://www.nufc.co.uk",
		            "email": "admin@nufc.co.uk",
		            "founded": 1881,
		            "clubColors": "Black / White",
		            "venue": "St. James' Park",
		            "lastUpdated": "2022-02-10T19:22:56Z"
		        },
		        {
		            "id": 68,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Norwich City FC",
		            "shortName": "Norwich",
		            "tla": "NOR",
		            "crestUrl": "https://crests.football-data.org/68.png",
		            "address": "Carrow Road Norwich NR1 1JE",
		            "phone": null,
		            "website": "http://www.canaries.co.uk",
		            "email": "reception@ncfc-canaries.co.uk",
		            "founded": 1902,
		            "clubColors": "Yellow / Green",
		            "venue": "Carrow Road",
		            "lastUpdated": "2022-03-23T08:28:03Z"
		        },
		        {
		            "id": 73,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Tottenham Hotspur FC",
		            "shortName": "Tottenham",
		            "tla": "TOT",
		            "crestUrl": "https://crests.football-data.org/73.svg",
		            "address": "Bill Nicholson Way, 748 High Road London N17 0AP",
		            "phone": "+44 (0844) 4995000",
		            "website": "http://www.tottenhamhotspur.com",
		            "email": "customer.care@tottenhamhotspur.com",
		            "founded": 1882,
		            "clubColors": "Navy Blue / White",
		            "venue": "Tottenham Hotspur Stadium",
		            "lastUpdated": "2020-11-20T07:12:32Z"
		        },
		        {
		            "id": 76,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Wolverhampton Wanderers FC",
		            "shortName": "Wolverhampton",
		            "tla": "WOL",
		            "crestUrl": "https://crests.football-data.org/76.svg",
		            "address": "Waterloo Road Wolverhampton WV1 4QR",
		            "phone": "+44 (0871) 2222220",
		            "website": "http://www.wolves.co.uk",
		            "email": "info@wolves.co.uk",
		            "founded": 1877,
		            "clubColors": "Black / Gold",
		            "venue": "Molineux Stadium",
		            "lastUpdated": "2021-04-09T02:25:24Z"
		        },
		        {
		            "id": 328,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Burnley FC",
		            "shortName": "Burnley",
		            "tla": "BUR",
		            "crestUrl": "https://crests.football-data.org/328.png",
		            "address": "Harry Potts Way Burnley BB10 4BX",
		            "phone": "+44 (0871) 2211882",
		            "website": "http://www.burnleyfootballclub.com",
		            "email": "info@burnleyfc.com",
		            "founded": 1881,
		            "clubColors": "Claret / Sky Blue",
		            "venue": "Turf Moor",
		            "lastUpdated": "2022-02-10T19:24:11Z"
		        },
		        {
		            "id": 338,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Leicester City FC",
		            "shortName": "Leicester City",
		            "tla": "LEI",
		            "crestUrl": "https://crests.football-data.org/338.png",
		            "address": "The Walkers Stadium, Filbert Way Leicester LE2 7FL",
		            "phone": "+44 (0844) 8156000",
		            "website": "http://www.lcfc.com",
		            "email": null,
		            "founded": 1884,
		            "clubColors": "Royal Blue / White",
		            "venue": "King Power Stadium",
		            "lastUpdated": "2022-02-10T19:48:23Z"
		        },
		        {
		            "id": 340,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Southampton FC",
		            "shortName": "Southampton",
		            "tla": "SOU",
		            "crestUrl": "https://crests.football-data.org/340.png",
		            "address": "Britannia Road Southampton SO14 5FP",
		            "phone": null,
		            "website": "http://www.saintsfc.co.uk",
		            "email": "sfc@saintsfc.co.uk",
		            "founded": 1885,
		            "clubColors": "Red / White / Black",
		            "venue": "St. Mary's Stadium",
		            "lastUpdated": "2022-02-10T19:48:04Z"
		        },
		        {
		            "id": 341,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Leeds United FC",
		            "shortName": "Leeds United",
		            "tla": "LEE",
		            "crestUrl": "https://crests.football-data.org/341.png",
		            "address": "Elland Road Leeds LS11 0ES",
		            "phone": "+44 (0871) 3341919",
		            "website": "http://www.leedsunited.com",
		            "email": "reception@leedsunited.com",
		            "founded": 1904,
		            "clubColors": "White / Blue",
		            "venue": "Elland Road",
		            "lastUpdated": "2022-02-10T19:27:14Z"
		        },
		        {
		            "id": 346,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Watford FC",
		            "shortName": "Watford",
		            "tla": "WAT",
		            "crestUrl": "https://crests.football-data.org/346.svg",
		            "address": "Vicarage Road Watford WD18 0ER",
		            "phone": null,
		            "website": "http://www.watfordfc.com",
		            "email": "yourvoice@watfordfc.com",
		            "founded": 1881,
		            "clubColors": "Yellow / Black",
		            "venue": "Vicarage Road Stadium",
		            "lastUpdated": "2020-11-26T02:16:48Z"
		        },
		        {
		            "id": 354,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Crystal Palace FC",
		            "shortName": "Crystal Palace",
		            "tla": "CRY",
		            "crestUrl": "https://crests.football-data.org/354.png",
		            "address": "Whitehorse Lane London SE25 6PU",
		            "phone": "+44 (020) 87686000",
		            "website": "http://www.cpfc.co.uk",
		            "email": "info@cpfc.co.uk",
		            "founded": 1905,
		            "clubColors": "Red / Blue",
		            "venue": "Selhurst Park",
		            "lastUpdated": "2022-02-10T19:22:36Z"
		        },
		        {
		            "id": 397,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Brighton & Hove Albion FC",
		            "shortName": "Brighton Hove",
		            "tla": "BHA",
		            "crestUrl": "https://crests.football-data.org/397.svg",
		            "address": "44 North Road Brighton & Hove BN1 1YR",
		            "phone": "+44 (01273) 878288",
		            "website": "http://www.seagulls.co.uk",
		            "email": "seagulls@bhafc.co.uk",
		            "founded": 1898,
		            "clubColors": "Blue / White",
		            "venue": "The American Express Community Stadium",
		            "lastUpdated": "2021-04-12T13:10:44Z"
		        },
		        {
		            "id": 402,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "Brentford FC",
		            "shortName": "Brentford",
		            "tla": "BRE",
		            "crestUrl": "https://crests.football-data.org/402.png",
		            "address": "Braemar Road Brentford TW8 0NT",
		            "phone": null,
		            "website": "http://www.brentfordfc.co.uk",
		            "email": "enquiries@brentfordfc.co.uk",
		            "founded": 1889,
		            "clubColors": "Red / White / Black",
		            "venue": "Griffin Park",
		            "lastUpdated": "2022-04-03T16:24:00Z"
		        },
		        {
		            "id": 563,
		            "area": {
		                "id": 2072,
		                "name": "England"
		            },
		            "name": "West Ham United FC",
		            "shortName": "West Ham",
		            "tla": "WHU",
		            "crestUrl": "https://crests.football-data.org/563.png",
		            "address": "Queen Elizabeth Olympic Park, London London E20 2ST",
		            "phone": "+44 (020) 85482794",
		            "website": "http://www.whufc.com",
		            "email": "yourcomments@westhamunited.co.uk",
		            "founded": 1895,
		            "clubColors": "Claret / Sky Blue",
		            "venue": "London Stadium",
		            "lastUpdated": "2022-02-19T08:09:25Z"
		        }
		    ]
		}`);
        return data.teams;
    },
    async domSearchTeam() {
        $('#search-team').on('keyup', () => {
            let value = $('#search-team').val();
            let cardTeams = [...$('#list-teams .item-card')];
            cardTeams.filter((e) => {
                let listTeams = e.querySelector('.side-mid .description h1');
                if (listTeams.innerText.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    e.classList.add("inline");
                    e.classList.remove("hidden");
                } else {
                    e.classList.add("hidden");
                    e.classList.remove("inline");
                }
            })
        });
    },

    async domShowFormSeach() {
        $('#btn-search-teams').on('click', () => {
            $('#search-team').toggleClass('hidden');

        })
    }
}


export default favoritePage;
  const newsCode = {
      laliga: 'https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/news',
      epl: 'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news',
      bundesliga: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/news',
      portugal: 'https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/news',
      ligue1: 'https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/news',
      serieA: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/news',
      ucl: 'https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/news',
      eredivisie: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/news',
  };

  const NewsPage = {
      async init() {
          return ` 
          <custom-loading></custom-loading>
		<section class="text-gray-600 body-font">
	        <div class="container px-5 py-24 mx-auto max-w-7x1">
	            <div class="flex flex-wrap w-full mb-4 p-4">
	                <div class="w-full mb-6 lg:mb-0">
                     <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900 dark:text-white">News Feed</h1>
	                   <div class="h-1 w-20 bg-green-400 rounded"></div>
	                </div>
	            </div>
	            <div class="news flex flex-wrap m-4 mb-6 items-stretch">
	                
	            </div>
	        </div>
    	</section>

		`
      },
      async afterRender() {
          await this.fetchRequest({ id: newsCode.bundesliga });
          await this.fetchRequest({ id: newsCode.laliga });
          await this.fetchRequest({ id: newsCode.epl });
          await this.fetchRequest({ id: newsCode.portugal });
          await this.fetchRequest({ id: newsCode.ligue1 });
          await this.fetchRequest({ id: newsCode.serieA });
          await this.fetchRequest({ id: newsCode.ucl});
          await this.fetchRequest({ id: newsCode.eredivisie});
      },
      async fetchRequest({ id }) {
          const response = await fetch(id);
          const data = await response.json();
          
          try {
              data.articles.forEach((item) => {
              const published = item.published;
                  // console.log(item.images[0].url);
                  $('custom-loading').remove();
              document.querySelector('.news').innerHTML += `
            	<div class="xl:w-1/3 md:w-1/2 p-4">
	                    <div class="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg h-full">
	                    <img class="lazyload fade-in lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" data-src="${item.images[0].url}" alt="Image Size 720x400">				
					      	<h3 class="tracking-widest text-green-500 text-xs font-medium title-font">${new Date(item.published).toUTCString().split(' ').slice(0,4).join(' ')}</h3>
					        <a href="${item.links.web.href}" target="_blank" class="hover:text-green-500"> <h2 class="text-lg dark:text-white text-gray-900 font-medium title-font mb-4">${item.headline}</h2></a>		           
					        <p class="leading-relaxed hidden md:block text-base dark:text-white mb-6">${item.description}</p>

	                    </div>
	            </div>
						  `
              });
          } catch(error) {
          	
          }

      }
  }

  export default NewsPage;
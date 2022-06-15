Feature("Game Page Testing")
	Scenario('Menunggu 1 Menit untuk mengembalikan limit dari API',async({I})=>{
		I.wait(60);
	});

	Scenario('Menampilkan Semua Matches',async({I})=>{
		I.amOnPage('/#/game-page');
		await I.waitForElement('.card',80).then(async ()=>{
			I.seeElement('.card');
		});
	});

	Scenario('Klik Detail Match',async({I})=>{
		I.amOnPage('/#/game-page');
		await I.waitForElement('.card',80).then(async ()=>{
			I.seeElement('.card');
			I.click('#next-match > div:nth-child(1) > div.text-4xl.w-2\\/4.mb-2.m-auto.h-1\\/6.bg-white.flex.rounded-\\[15\\%\\].shadow-md.group.hover\\:shadow-inner.bg-\\[\\#f9f9f9\\] > a');
		});
	});

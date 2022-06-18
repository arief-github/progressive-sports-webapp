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
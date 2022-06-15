Feature("Detail Teams Page Testing")
	Scenario('Menunggu 1 Menit untuk mengembalikan limit dari API',async({I})=>{
		I.wait(60);
	});

	Scenario("Klik button detail team di halaman detail liga lalu menampilkan team tersebut di halaman detail team",async ({I})=>{
		I.amOnPage("/#/league/2003");
		await I.waitForElement('.item-card',80).then(async ()=>{
			I.click('.btn-detail');
			await I.waitForElement('.detail',80);
		});
	});


	Scenario('Perubahan Button Setelah di unfavorite',async({I})=>{
		I.amOnPage("/#/teams/2");
		await I.waitForElement('.detail',80).then(async ()=>{
			await I.waitForElement('#beforeAdd',80);
		});
	});

	Scenario('Perubahan Button Setelah di favorite',async({I})=>{
		I.amOnPage("/#/teams/2");
		await I.waitForElement('.detail',80).then(async ()=>{
			I.click('#addToFavorite');
			await I.waitForElement('#afterAdd',80);
		});
	});



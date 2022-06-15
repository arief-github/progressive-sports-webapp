Feature("Testing Favorite")
	Scenario('Menunggu 1 Menit untuk mengembalikan limit dari API',async({I})=>{
		I.wait(60);
	});

	Scenario('Ke halaman Favorite Page lalu tampilkan pesan kosong',async({I})=>{
		I.amOnPage('/#/favorite-page');
		I.seeElement('message-null')
	});

	Scenario('Pilih 1 team menjadi favorite dan di unfavorite kan',async({I})=>{
		I.amOnPage('/#/teams/61');
		await I.waitForElement('#addToFavorite',80).then(async ()=>{
			I.click("#addToFavorite");
			I.amOnPage('/#/favorite-page');
			await I.waitForElement('.item-card',80).then(async ()=>{
				I.seeElement('.item-card');
				I.click('.btn-favorite');
				I.seeElement('message-null');
			});
		});
	});


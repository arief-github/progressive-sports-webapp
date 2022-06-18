
Feature("Home Page Testing")
	Scenario('Menunggu 1 Menit untuk mengembalikan limit dari API',async({I})=>{
		I.wait(60);
		I.amOnPage("/#/");
	});

	Scenario("Menampilkan Loading",async({I})=>{
		I.amOnPage("/#/");
		I.waitForElement("custom-loading",80)
	})

	Scenario("Menuju halaman Home Dan Berhasil Menampilkan Liga",async ({I})=>{
		I.amOnPage("/#/");
		await I.waitForElement(".card-league",80).then(async ()=>{
			I.seeElement('.card-league');
		})
	});

	Scenario("Menuju halaman Home, Menampilkan Halaman 10 Kali dan Berhasil Menampilkan Liga",async ({I})=>{
		for (var i = 0; i < 10; i++) {
			I.amOnPage("/#/");
			await I.waitForElement(".card-league",80).then(async ()=>{
				I.seeElement('.card-league');
			})
		}
	})


	Scenario("Klik Salah Satu Liga dan Menuju Halaman Detail Liga",async({I})=>{
		I.wait(60);
		I.amOnPage("/#/");
		await I.waitForElement('.card-league',80).then(async()=>{
			I.seeElement('.card-league');
			I.click(".btn-detail-liga");
			await I.waitForElement(".detailLeague",80).then(async ()=>{
				I.seeElement(".detailLeague");
			})
		})
	})

	Scenario("Mencari Liga",async({I})=>{
		I.amOnPage("/#/");
		await I.waitForElement('.card-league',80).then(async ()=>{
			I.click("#btn-search-leagues");
			const search = locate('input').withAttr({ placeholder: 'Search leagues' });
			I.fillField(search,"FIFA World Cup")
			I.see('FIFA World Cup');
		})
	})

Feature("Detail Player Page Testing")
	Scenario('Menunggu 1 Menit untuk mengembalikan limit dari API',async({I})=>{
		I.wait(60);
	});
	
	Scenario("Menampilkan Biodata Pemain",async ({I})=>{
		I.amOnPage("/#/players/8484");
		I.click('#playerBiodata');
		await I.waitForElement('.info-player',80).then(async ()=>{
			I.seeElement('.info-player');
		})
	})


	Scenario("Menampilkan History Pertandingan Pemain",async ({I})=>{
		I.amOnPage("/#/players/8484");
		I.click('#matchesHistory');
		await I.waitForElement('.list-history',80).then(async ()=>{
			I.seeElement('.list-history');
		})
	})

Feature("Detail Matches Testing")
	const makeid = (length)=>{
	    let result           = '';
	    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	    let charactersLength = characters.length;
		    for ( var i = 0; i < length; i++ ) {
		      result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
		return result;
	}

	Scenario('Menunggu 1 Menit untuk mengembalikan limit dari API',async({I})=>{
		I.wait(60);
	});
	
	Scenario("Menampilkan Detail Match",async ({I})=>{
		I.amOnPage("/#/matches/390281");
		await I.waitForElement('#lastMatch',80).then(async ()=>{
			I.seeElement('#lastMatch');
		})
	})


	Scenario("Menambahkan Komentar di Detail Match",async ({I})=>{
		I.amOnPage("/#/matches/390281");
		await I.waitForElement('.form-review',80).then(async ()=>{
			const eName = locate('#name');
			const eKomentar = locate('#message');
			const valueName = makeid(10);
			I.fillField(eName,valueName);
			I.fillField(eKomentar,makeid(254));
			I.click('.btnSubmit');
			I.wait(10);
			I.see(valueName);
		})
	})

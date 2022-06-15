Feature("Detail League Page Testing")
	Scenario('Menunggu 1 Menit untuk mengembalikan limit dari API',async({I})=>{
		I.wait(60);
		I.amOnPage("/#/league/2002");
	});

	const ClickTeamAndShow = async ({I ,eButton, eFrame})=>{
		I.amOnPage("/#/league/2002");
		await I.waitForElement('.detailLeague',80).then(async()=>{
			I.click(eButton);
			await I.waitForElement(eFrame,80);
		})
	}
	Scenario('Klik Team dan Menampilkan Data',async({I})=>{
		await ClickTeamAndShow({
			I : I,
			eButton : "#selectTeams",
			eFrame : "#list-teams"
		});
	});
	Scenario('Klik Standing dan Menampilkan Data',async({I})=>{
		await ClickTeamAndShow({
			I : I,
			eButton : "#selectStandings",
			eFrame : "div.list-standings"
		});
	});
	Scenario('Klik Schedules dan Menampilkan Data',async({I})=>{
		await ClickTeamAndShow({
			I : I,
			eButton : "#selectSchedules",
			eFrame : ".list-matches"
		});
	});
	Scenario('Klik Top Scorers dan Menampilkan Data',async({I})=>{
		await ClickTeamAndShow({
			I : I,
			eButton : "#selectTopScorers",
			eFrame : ".list-scorers"
		});
	});

	
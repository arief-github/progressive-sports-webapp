Feature("News Page Testing")
	Scenario("Menampilkan Loading", async ({ I }) => {
		I.amOnPage("/#/news-page");
		I.waitForElement("custom-loading", 80)
	})

	Scenario("Klik salah satu news dan menuju halaman espn news", async({ I }) => {
		I.amOnPage("/#/news-page");
		await I.waitForElement('.news', 80).then(async() => {
			I.seeElement('.news');
			I.click('a');
		})
	})
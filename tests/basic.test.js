import { Selector, t } from "testcafe"


fixture `Getting started with testCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t => {      
        //Test Setup goes here
        // await runDatabasereset()
        //await seedtestData()
    })
    .beforeEach(async t =>  {
        // Runs before each test

    })
    .after(async t => {
        //cleaning test data
        //logging and sending data is monitoring systems
    })
    .afterEach(async t => {
        //Runs after each test
    })


test('My First TestCafe test', async t => {
    //here goes testcafe code

    const name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText

    await t
   // .setTestSpeed(1)
    .typeText(name_input, "Subham")
    .takeScreenshot()
   //.takeElementScreenshot(submit_button)
   // .wait(3000)
    .click(submit_button)
    .expect(articleText).contains('Subham')
})  

    // run code : testcafe chrome basic.test.js
/**
 * 
 */
describe(' should see welcome page',function(){
	console.log("testing started")

	
	var welcome_page = require('../PageObjects/WelcomePageObjects.js')
	it('should capture the welcome message',function(){
		browser.sleep(5000)
		var el = welcome_page.WELCOME_MESSAGE
		el.getText().then(function(actualvalue){
			console.log("actual text is " + " " +actualvalue)
		})
	})
	
	it('should click on new deal button',function(){
		welcome_page.NEW_DEAL.click()
		})
		})



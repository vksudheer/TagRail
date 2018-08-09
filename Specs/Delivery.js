describe('Fill user info page',function(){
	 
	 var user_info    = require('../PageObjects/DeliveryPageObjects.js')
	 var user_details = require('../Data/Deliveryvalues.js')
	it('should check for user info page',function(){
	     browser.sleep(3000)	
	    // browser.waitForAngular(false)
	   expect(user_info.PAGE_VERIFY.getText()).toBe("DELIVER");
		
	})
	
	it('should eneter user details',function(){
		//browser.waitForAngular(true)
		user_info.FIRST_NAME.sendKeys(user_details.uservalues.FIRST_NAME)
		user_info.LAST_NAME.sendKeys(user_details.uservalues.LAST_NAME)
		user_info.PHONE_NUMBER.sendKeys(user_details.uservalues.PHONE)
		user_info.EMAIL.sendKeys(user_details.uservalues.EMAIL)
		user_info.ADDRESS.sendKeys(user_details.uservalues.ADDRESS)
		user_info.CITY_NAME.sendKeys(user_details.uservalues.CITY ) 
		user_info.STATE_NAME.sendKeys(user_details.uservalues.STATE)
	})
	
	it('should check and click on next button',function(){
		var next_button =user_info.NEXT;
		expect(next_button.isDisplayed()).toBeTruthy()
		next_button.click().then(function(){
			//browser.sleep(14000)
		})
			
	})
	
	
})



      
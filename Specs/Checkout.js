describe('check checkout module',function(){
	
	 var checkout_obj = require('../PageObjects/CheckoutObjects.js')
	 
	it('should check the presence checkout button',function(){
		expect(checkout_obj.CHECK_CHECKOUT_BUTTON.isDisplayed()).toBeTruthy()
		
	})
	
	it('should compare the values in deal summery section with total payment',function(){
		
		expect(checkout_obj.MONTH_PAY_SUMMERY.getText()).toBe(checkout_obj.MONTH_PAY_ON_HEADER.getText())
		console.log(checkout_obj.MONTH_PAY_SUMMERY.getText())
        console.log(checkout_obj.MONTH_PAY_ON_HEADER.getText())
			
		})
	
	it('should click on checkout button',function(){
		
		checkout_obj.CHECK_CHECKOUT_BUTTON.click().then(function(){
			
			browser.sleep(9000)
		})
		
	})
	
	
	
})
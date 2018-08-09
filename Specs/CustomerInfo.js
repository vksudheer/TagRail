describe('Analyze customer information page',function(){
	
	var customer_obj = require('../PageObjects/CustomerInfoPageObject.js')
	var customer_val = require('../Data/CustomerInfoPageValues.js')
	//var delivery_val = require('../Data/Deliveryvalues.js')
	
	it('should verify page title',function(){
		
		expect(customer_obj.CUSTOMER_INFO_TXT.getText()).toBe(customer_val.customervalues.PAGE_HEADER)
		
	})
	
	it('should verify submit button',function(){
		
       expect(customer_obj.SUBMIT.isDisplayed()).toBeTruthy()     
	  
	})
	
   it('should check whether phone button is selected by default',function(){
	   
	   expect(customer_obj.PHONE_BUTTON.isSelected()).toBeFalsy()
	   
   })
   
   it('should check whether Individual applicant button is selected by default',function(){
	   
	   expect(customer_obj.INDIVIDUAL_APPLICANT.isEnabled()).toBeTruthy()     
		  
   })
   
   it('should click on submit button',function(){
		
       customer_obj.SUBMIT.click().then(function(){
    	   
    	   browser.sleep(7000)
       })   
	  
	})
   
}) 
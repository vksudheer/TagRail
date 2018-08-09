
describe(' should check payment module',function(){
	
	var payment_obj = require('../PageObjects/PaymentObject.js')
	var payment_val = require('../Data/Paymentvalues.js')
	
	it('should click on down payment',function(){
		payment_obj.DOWN_PAYMENT.click().then(function(){
			//browser.sleep(4000)
		})
		})
		
    it('should verify the presence of credit score dropdown option',function(){
    	
    	expect(payment_obj.CREDIT_SCORE_CHECK.getText()).toBe(payment_val.paymentvalues.DROP_DOWN_TXT)
    })	
    
    it('should select any one of the finance',function(){
    	payment_obj.FINANACE_SELECT.click().then(function(){
    		//browser.sleep(4000)
    	})
    })
    
    it('should check the presence of next button and should click on next button',function(){
    	
    	var next = payment_obj.NEXT.getText()
    	expect(next.isPresent()).toBeTruthy()
    	payment_obj.NEXT.click().then(function(){
    		//browser.sleep(8000)
    	})
    })
	
	
})
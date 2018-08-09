describe('Testing protection module',function(){
	
	var protect = require('../PageObjects/ProtectionObjects.js')
	
	it('should select protection item from EFG Etch Protection',function(){
		
		protect.ETH_PROTECTION.click()
	})
	
	it('should select protection item from EFG Maintenance',function(){
		
		protect.EFG_MAINTANANCE.click().then(function(){
			browser.sleep(3000)
		})
	})
	
	it('should select protection item from Lexus Financial Services Excess',function(){
		
		protect.FINANCIAL_SERVICES.click().then(function(){
			browser.sleep(3000)
		})
	})
	
	it('should check whether user can be able to select mutiple terms from same option',function(){
		
		protect.ETH_MULTIPROTECT_SELECT.click()
		expect(protect.ETH_PROTECTION.isSelected()).toBeFalsy
		
		})
		
    it('should click on next button',function(){
    		protect.PROTECTION_NEXT.click().then(function(){
    			browser.sleep(7000)
    	 })		
    })
})
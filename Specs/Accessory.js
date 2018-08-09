describe('should check Accessory page',function(){
	
	var accessory = require('../PageObjects/AccessoryObjects.js')
	it('should select Accessories',function(){
		accessory.ACCESSORY1.click()
		accessory.ACCESSORY2.click()
		})
	
	it('should check whether accessory image is displayed or not',function(){
		var image = accessory.VERIFY_ACCESSORY_IMAGE
		expect(image.isDisplayed()).toBeTruthy()
			})
	
	it('should click on next button',function(){
		
		accessory.NEXT.click().then(function(){
			browser.sleep(3000)
		})
	})
	
	
})
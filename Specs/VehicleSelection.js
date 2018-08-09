describe('Analyze vehicle list page',function(){
	var vehicle_list = require('../PageObjects/VehiclePageObjects.js')
	it('should check the presence of continue button',function(){
		browser.sleep(3000)
		var el = vehicle_list.CHECK_CONTINUE_BUTTON  ;
		expect(el.isPresent()).toBeTruthy()
		
	})
	
	it('should select vehicle from vehicle list',function(){
		vehicle_list.SELECT_VEHICLE.click()
		vehicle_list.CLICK_CONTINUE_BUTTON.click()
	})
	
	
})


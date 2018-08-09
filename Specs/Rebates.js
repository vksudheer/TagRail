
describe("checking rebate page",function(){
	
	var rebate = require('../PageObjects/RebatesObjects.js')
	var reb_val= require('../Data/RebateValues.js')
	
	it('should check whether college rebate is available there',function(){
		
		expect(rebate.CLG_REBATE.getText()).toBe(reb_val.rebatevalues.COLLEGE_REBATE)
		
		})
	it('should check military rebate is available there',function(){
		
		expect(rebate.MLT_REBATE.getText()).toBe(reb_val.rebatevalues.MILITARY_REBATE)
	})
	
	it('should select college rebate',function(){
	                    
		rebate.CLG_REBATE_SELECT.click()
	})
	
	it('should select military rebate',function(){
		
		rebate.MLT_REBATE_SELECT.click()
		
	})
	
	it('should check whether college rebate is deselected',function(){
		
		expect(rebate.CLG_REBATE_DESELECT.getText()).toBe(reb_val.rebatevalues.REBATE_DSL_TXT)
		
	})
	
	it('should click on next button',function(){
		
		rebate.REBATE_NEXT.click()
		
	})
})

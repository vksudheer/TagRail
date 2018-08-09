describe('should fill the trade-in page',function(){
	
	 var trade_obj  = require('../PageObjects/TradeInObjects.js')
	 var trade_val  = require('../Data/TradeInValues.js')
	
	  it('should check for Trad-in',function(){
		expect(trade_obj.TRADEIN_VERIFY.getText()).toBe(trade_val.tradevalues.PAGE_VERFY)
		})
		
	  it('should select year',function(){
		
		  trade_obj.SELECT_YEAR.get(trade_val.tradevalues.YEAR).click() 
	  })	
	  
	  it('should select brand',function(){
		  trade_obj.SELECT_BRAND.get(trade_val.tradevalues.BRAND).click()
	  })
	  
	  it('should select model',function(){
		  trade_obj.SELECT_MODEL.get(trade_val.tradevalues.MODEL).click()
	  })
	  it('should select type',function(){
		  trade_obj.SELECT_TYPE.get(trade_val.tradevalues.TYPE).click()
	  })
	
	  it('should enter mileage',function(){
	    trade_obj.MILEG.sendKeys(trade_val.tradevalues.MILEAGE)
	    })
	  
	  it('should enter Trade_Allowence',function(){
		  trade_obj.TRADE_ALLOWANCE.sendKeys(trade_val.tradevalues.ALLOWENCE)
	    })
	   
	 it('should enter Trade_PayOFF',function(){
		 trade_obj.TRADE_PAYOFF.sendKeys(trade_val.tradevalues.PAYOFF)
		})
	 
	 it('should check and click condition header',function(){
		 expect(trade_obj.CONDITION_HEADER.getText()).toBe(trade_val.tradevalues.CONDITION_VERIFY)
		 trade_obj.CONDITION_HEADER.click()
	    })
	 
	it('should click on next button',function(){
		trade_obj.NEXT.click()
	    })
	
})
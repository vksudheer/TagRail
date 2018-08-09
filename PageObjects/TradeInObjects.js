
 function TradeIn(){
	 
 this.SELECT_YEAR      = element.all(by.options("modelYear for modelYear in bodyCtrl.yearArr"))	
 this.SELECT_BRAND     = element.all(by.options("brand.name for brand in bodyCtrl.brands track by brand.id"))
 this.SELECT_MODEL     = element.all(by.options("option.name for option in bodyCtrl.models track by option.id"))
 this.SELECT_TYPE      = element.all(by.options("type.name for type in bodyCtrl.types track by type.id"))
 this.TRADEIN_VERIFY   = element(by.css("span[class='tab-header-text ng-binding']"))
 this.MILEG            = element(by.css("input[id='TradeIn-Vehicle-Mileage']"))
 this.TRADE_ALLOWANCE  = element(by.css("input[id='TradeIn-Vehicle-TradeAllowance']"))
 this.TRADE_PAYOFF     = element(by.css("input[id='TradeIn-Vehicle-TradePayOff']"))
 this.CONDITION_HEADER = element(by.css("div[event-data-source='TradeIn.Condition.GOOD']"))
 this.NEXT             = element(by.css("button[event-data-source='TradeIn.Next']"))
 
 }
  
module.exports = new TradeIn();


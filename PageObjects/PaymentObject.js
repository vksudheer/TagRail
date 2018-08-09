 
function Payment(){
	
	this.DOWN_PAYMENT        = element(by.css("div[event-data-source='DOWNPAYMENT.$3000']"))
	this.CREDIT_SCORE_CHECK  = element(by.css("h1[class='ng-scope']"))
	this.FINANACE_SELECT     = element(by.css("div[class='finance-contents-block finance-amount-block']"))
	this.NEXT                = element(by.css("div[class='form-group tab-content-next-btn']"))
}
  
module.exports = new Payment()
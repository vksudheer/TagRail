
function Checkout(){
	
	this.CHECK_CHECKOUT_BUTTON = element(by.css("div[event-data-source='CheckOut.CheckoutButton']"))
	this.MONTH_PAY_SUMMERY     = element(by.css("span[class='ng-binding ng-scope']"))
	this.MONTH_PAY_ON_HEADER   = element(by.css("span[class='ng-binding ng-scope']"))
	
}

module.exports = new Checkout()
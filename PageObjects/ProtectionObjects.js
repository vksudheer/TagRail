
function Protection(){
	
	this.ETH_PROTECTION          = element(by.css("label[event-data-source='EFG Etch Protection']"))
	this.EFG_MAINTANANCE         = element(by.css("label[event-data-source='EFG Maintenance']"))
	this.FINANCIAL_SERVICES      = element(by.css("label[for='terms-20']")) 
	this.ETH_MULTIPROTECT_SELECT = element(by.css("label[for='terms-01']")) 
	this.PROTECTION_NEXT         = element(by.css("button[event-data-source='Protect.Next']"))
	
}

module.exports = new Protection()
  

function Rebate(){
	
	this.CLG_REBATE          = element(by.css("div[event-data-source='College Graduate Rebate Program']"))
	this.MLT_REBATE          = element(by.css("div[event-data-source='Military Reward Program']"))
	this.CLG_REBATE_SELECT   = element(by.css("button[ng-click='addRebatesRetail(viewRebatesRetail)']"))
	this.MLT_REBATE_SELECT   = element(by.css("button[event-data-source='Military Reward Program']"))
	this.CLG_REBATE_DESELECT = element(by.css("button[ng-click='addRebatesRetail(viewRebatesRetail)']"))
    this.REBATE_NEXT         = element(by.css("button[event-data-source='Rebates.Next']"))
	                                                            
}

module.exports = new Rebate()
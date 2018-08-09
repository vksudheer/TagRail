
function VehiclePage(){
	
	this.CHECK_CONTINUE_BUTTON = element(by.css("button[id='saveVehiclesButton']"));
	this.SELECT_VEHICLE        = element(by.css("img[src='https://az793322.vo.msecnd.net/9687/Inventory/18L154/Thumbnails/Atomic_Silver.png']"))
	this.CLICK_CONTINUE_BUTTON = element(by.css("button[id='saveVehiclesButton']"))
	
	}

 module.exports = new VehiclePage();
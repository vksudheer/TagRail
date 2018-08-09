  
 function Accessory(){
	 
	this.ACCESSORY1             = element(by.css("button[event-data-source='rear spoiler']")) 
	this.ACCESSORY2             = element(by.css("button[event-data-source='all-weather floor mats']"))
	this.VERIFY_ACCESSORY_IMAGE = element(by.css("img[src='https://tagrail.blob.core.windows.net/9687/AccessoryImages/84b0ddf8-c3a2-477b-952c-a3f334d7d5a9.png']"))
	this.NEXT                   = element(by.css("button[ng-click='goToNextTab()']"))
	 
	 
 }
 
 module.exports = new Accessory()
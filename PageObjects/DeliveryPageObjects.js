
function UserInfo(){
	
	this.PAGE_VERIFY  = element(by.css("span[class='tab-header-text ng-binding']"));
	this.FIRST_NAME   = element(by.css("input[id='fName']"));
	this.LAST_NAME    = element(by.css("input[id='lName']"));
	this.PHONE_NUMBER = element(by.css("input[id='phone']"));
	this.EMAIL        = element(by.css("input[id='email']"));
	this.ADDRESS      = element(by.css("input[id='address']"));
	this.CITY_NAME    = element(by.css("input[id='city']"));
	this.STATE_NAME   = element(by.css("select[placeholder='STATE']"));
	this.NEXT         = element(by.css("button[class='lexus-next-btn btn theme-btn-3 pull-right margin-right-fifteen margin-bottom-ten green-btn fixed-bottom-btn ng-scope']"))
	
   }
   
   module.exports = new UserInfo();

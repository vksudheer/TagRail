

function Login(){
	
	this.USERNAME      = element(by.model("user.UserName"));
	this.PASSWORD      = element(by.model("user.Password"));
	this.DEALER_PIN    = element(by.model("user.DealerPin"));
	this.SIGN_IN       = element(by.css("button[type='button']"));
	this.ALERT         = element(by.css("button[class='confirm']"));
	//this.ALERT_MESSAGE = element(by.css("p[style='display: block;']"))
	
	this.getURL = function(){
		browser.get("http://10.10.4.132/tagrail_v3_3/duplicate/OP_salesdesking_staging/#/");
		}
	
	}
  module.exports = new Login();
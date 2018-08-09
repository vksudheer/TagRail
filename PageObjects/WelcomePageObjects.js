function WelcomePage(){
	
 this.WELCOME_MESSAGE =	element(by.css("h3[class='welcome-text ng-binding']"));
 this.NEW_DEAL        = element(by.css("img[ng-src='images/lexus/welcome/new_deal.png']"));
	
	}
  module.exports = new WelcomePage();
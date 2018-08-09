
describe('checking login Page',function(){
	
	 var login = require('../PageObjects/LoginObects.js')
	 var data  = require('../Data/LoginValues.js')
	 var using = require('jasmine-data-provider')
	 
	  it('should navigate to url',function(){
				login.getURL(); 
			 })
	 
	 using(data.Datadriven,function(data,description){
		 it('should enter login credentials'+'   '+description,function(){
				login.USERNAME.sendKeys(data.UserName);
				login.PASSWORD.sendKeys(data.Password);
				login.DEALER_PIN.sendKeys(data.Pin);
			});
			it('should click on login', function(){
				login.SIGN_IN.click();
			})
			
			it('should click on Alert',function(){
				browser.sleep("4000")
			    login.ALERT.click()
				
			})
			
		 
	 })
	
	
	
	/*afterEach(function(){
		console.log("Login success fully")
	})*/
	
	})


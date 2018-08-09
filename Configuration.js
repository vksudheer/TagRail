/**
 * 
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
//SeleniumAddress: 'http://localhost:4444/wd/hub',		
specs:['./Specs/Login.js','./Specs/WelcomePage.js','./Specs/VehicleSelection.js','./Specs/Delivery.js',
	'./Specs/TradeIn.js','./Specs/Payment.js','./Specs/Accessory.js','./Specs/Rebates.js','./Specs/Protection.js','./Specs/Checkout.js','./Specs/CustomerInfo.js'],	

onPrepare :function(){
browser.manage().window().maximize()

jasmine.getEnv().addReporter(
		new Jasmine2HtmlReporter({
		//takeScreenshotsOnlyOnFailures: true,	
          savePath: 'TestReport/screenshots'
	})
   );
},

suites:{
	
	Smoke:['./Specs/Login.js','./Specs/Delivery.js'],
    Regression:['./Specs/Login.js','./Specs/WelcomePage.js'],
	
},

jasmineNodeOpts: {
    showColors: true
  }

}
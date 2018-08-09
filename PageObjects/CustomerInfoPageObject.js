
function CustomerInfo(){
	
 this.CUSTOMER_INFO_TXT    = element(by.css("a[event-data-source='CustomerInfo']"))
 this.SUBMIT               = element(by.css("button[event-data-source='CustomerInfo.Individual-ApplicantType.Deal-Submit-Top.']"))
 this.PHONE_BUTTON         = element(by.css("input[value='phone']"))
 this.INDIVIDUAL_APPLICANT = element(by.css("label[event-data-source='CustomerInfo.Individual-ApplicantType']"))
}   
 
module.exports = new CustomerInfo()
package pages;

public class LoginPage {

	public LoginPage enterUserName(String uName) {	
		enterById("username", uName);
		return this;
	}
	public LoginPage enterPassword(String pwd) {			
		enterById("password", pwd);
		return this;
		
	}
	public HomePage clickLogin() {
		clickByClassName("decorativeSubmit");
		return new HomePage();
		
	}	

	
	

}

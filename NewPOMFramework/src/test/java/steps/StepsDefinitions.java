  package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsDefinitions {

	ChromeDriver driver;

	@Given("Launch Chromebrowser and load url")
	public void launchChromebrowserAndLoadUrl() {
		System.setProperty("webdriver.chrome.driver", "C:\\SeleniumSoft\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://leaftaps.com/opentaps");
		System.out.println(driver.getTitle());
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	@Given("enter username as (.*)")
	public void enterUsernameAsDemosalesmanager(String username) {
		driver.findElementById("username").sendKeys(username);
		
	} 
	@Given("enter password as (.*)")
	public void enterPasswordAsCrmsfa(String password) {
		driver.findElementById("password").sendKeys(password);
		
	}
	@When("click the login button")
	public void clickTheLoginButton() {
		driver.findElementByClassName("decorativeSubmit").click();
	}
	@Then("its navigated Homepage")
	public void itsNavigatedHomepage() {
		System.out.println(driver.getTitle());
	}
	@Then("close browser")
	public void closeBrowser() {
		driver.close();   
	}
	@Then("its navigated to same page")
	public void itsNavigatedToSamePage() {
		System.out.println(driver.getTitle());
	}	
	@Then("click the logout button")
	public void clickTheLogoutButton() {
		driver.findElementByClassName("decorativeSubmit").click();
	}

	@Given("enter username as SSSSSS")
	public void enterUsernameAsMilton() {
		driver.findElementById("username").sendKeys("SSSSSS");
	}
	@Then("verify error message")
	public void verifyErrorMessage() throws InterruptedException {
		Thread.sleep(2000);
		String text = driver.findElementByClassName("serviceError").getText();
		if(text.contains("The Following Errors Occurreed")) {
			System.out.println("The Error message is matched");

		}else {System.out.println("The Error message is not matched"); 
		}
	}
	@When("click CRMSFA")
	public void clickCRMSFA() {
		driver.findElementByLinkText("CRM/SFA").click();
	}

	@When("click leads link")
	public void clickLeadsLink() {
		driver.findElementByLinkText("Leads").click();
	}

	@When("click createLead")
	public void clickCreateLead() {
		driver.findElementByLinkText("Create Lead").click();
	}

	@When("enter the company as (.*)")
	public void enterTheCompanyAsABC(String company) {
		driver.findElementByXPath("//input[@id='createLeadForm_companyName']").sendKeys(company);
	}

	@When("enter the firstname as (.*)")
	public void enterTheFirstnameAsHema(String firstname) {
		driver.findElementByXPath("//input[@id='createLeadForm_firstName']").sendKeys(firstname);
	}

	@When("enter the lastname as (.*)")
	public void enterTheLastnameAsMali(String lastname) {
		driver.findElementByXPath("//input[@id='createLeadForm_lastName']").sendKeys(lastname);
	}
	@When("enter the phone number as tendigit")
	public void enterThePhoneNumberAsTenDigit() {
	   driver.findElementById("createLeadForm_primaryPhoneNumber").sendKeys("1234567890");
	}

	@When("choose source as website")
	public void chooseSourceAsWebsite() throws InterruptedException {
		WebElement source = driver.findElementById("createLeadForm_dataSourceId");
		Select dd = new Select(source);
		dd.selectByVisibleText("Website");
		Thread.sleep(2000);
	}
	
	@When("click the create lead button")
	public void clickTheCreateLeadButton() {
		driver.findElementByName("submitButton").click();
	}


	@Then("its navigated ViewLeadPage")
	public void itsNavigatedViewLeadPage() {
		System.out.println(driver.getTitle());
	}

	@Then("verify the firstname")
	public void verifyTheFirstname() {
		String fname = driver.findElementById("viewLead_firstName_sp").getText();
		if(fname.equals("Hema")) {
			System.out.println("Firstname is matched");
		}else
			System.out.println("Firstname is not matched");
	}
	@When("click Find Leads")
	public void clickFindLeads() {
		driver.findElementByLinkText("Find Leads").click();

	}
	@When("enter firstname")
	public void enterFirstname() {
		driver.findElementByXPath("(//div[@class='x-form-element']/input)[14]").sendKeys("Gopi");
	}
	
	@When("click Find Leads button")
	public void clickFindLeadsButton() throws InterruptedException {
		driver.findElementByXPath("//button[text()='Find Leads']").click();
		Thread.sleep(2000);
	}

	@Then("navigated ViewLeadPage")
	public void navigatedViewLeadPage() {
		System.out.println(driver.getTitle());
	}

	@Then("verify title of the page")
	public void verifyTitleOfThePage() {
		System.out.println(driver.getTitle());
		String title = driver.getTitle();
		System.out.println(title);
		if(title.contains("View")) {
			System.out.println("View Lead----Title  is matched");
		} else {
			System.out.println("View Lead----Title  is Not Matches");
		}
		if(title.contains("Duplicate Lead")) {
			System.out.println("Duplicate Lead----Title  is matched");
		} else {
			System.out.println("Duplicate Lead----Title  is Not Matches");
		}
	}

	@Then("click on Edit")
	public void clickOnEdit() throws InterruptedException {
		driver.findElementByLinkText("Edit").click();
		Thread.sleep(2000);
	}

	@Then("navigated Edit Lead page")
	public void navigatedEditLeadPage() {
		System.out.println(driver.getTitle());
	}

	@Then("change the company name")
	public void changeTheCompanyName() {
		driver.findElementByXPath("//input[@id='updateLeadForm_companyName']").clear();
		driver.findElementByXPath("//input[@id='updateLeadForm_companyName']").sendKeys("TCS");
	}

	@Then("click update")
	public void clickUpdate() throws InterruptedException {
		driver.findElementByXPath("//input[@value='Update']").click();
		Thread.sleep(2000);
	}

	@Then("confirm changed name appears")
	public void confirmChangedNameAppears() {
		System.out.println("name");
	}
	@When("enter First Name as hema")
	public void enterFirstNameAsHema() {
		driver.findElementByXPath("(//div[@class='x-form-element']/input)[14]").sendKeys("Hema");
	}

/*	@When("click on phone")
	public void clickOnPhone() {
		driver.findElementByXPath("//span[text()='Phone']").click();
	}
	
	@When("enter Area Code")
	public void enterAreaCode() {
		driver.findElementByName("phoneAreaCode").sendKeys("682");
	    
	}
	@When("enter phone numbers")
	public void enterPhoneNumberS() {
		driver.findElementByXPath("//input[@name='phoneNumber']").sendKeys("2084048");
		
	}
	-----------------------------
	//Click on first resulting lead	
			Thread.sleep(2000);
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.elementToBeClickable(By.xpath("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]")));
			
			String LeadId = driver.findElementByXPath("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]").getText();
			System.out.println(LeadId);
			
			driver.findElementByXPath("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]").click();	
			Thread.sleep(3000);*/

	@When("capture lead ID of first resulting lead")
	public void captureLeadIDOfFirstResultingLead() throws InterruptedException {
		String leadId = driver.findElementByXPath("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]").getText();
		System.out.println(leadId);
		Thread.sleep(2000);
	}
	@When("click first resulting lead")
	public void clickFirstResultingLead() throws InterruptedException {
		Thread.sleep(2000);
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]")));		
		driver.findElementByXPath("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]").click();
		
		Thread.sleep(2000);
		}

	@When("click Delete")
	public void clickDelete() {
		driver.findElementByXPath("//a[text()='Delete']").click();
	}

	@Then("navigated MyLeadsPage")
	public void navigatedMyLeadsPage() {
		System.out.println(driver.getTitle());
	}	

	@Then("enter captured lead ID")
	public void enterCapturedLeadID() {
		driver.findElementByXPath("(//div[@class='x-form-element']/input)[13]").sendKeys("10559");
	}
	@Then("verify error msg")
	public void verifyErrorMsg() {
		String errorMessage = driver.findElementByXPath("//div[text()='No records to display']").getText();
		if(errorMessage.contains("No records to")) {
			System.out.println("Error message is matched");
		}else {
			System.out.println("Error message is not matched");
		}
	}

	@When("click on Email")
	public void clickOnEmail() {
		driver.findElementByXPath("//span[text()='Email']").click();
	}

	@When("enter Email")
	public void enterEmail() throws InterruptedException {
		driver.findElementByXPath("//input[@name='emailAddress']").sendKeys("abc@gmail.com");
		Thread.sleep(3000);	
	}

	@When("click duplicate lead")
	public void clickDuplicateLead() {
		driver.findElementByXPath("//a[text()='Duplicate Lead']").click();
	}

	@Then("navigated Duplicate Lead Page") 
	public void navigatedDuplicateLeadPage() {
		System.out.println(driver.getTitle());
		String Title = driver.getTitle();
		if (Title.contains("Duplicate Lead")) {
			System.out.println("Title---Duplicate Lead---- Matched");

		} else {
			System.out.println("Title---Duplicate Lead---- not matched");
		}
	}

	@Then("Confirm the duplicated lead name is same as captured name")
	public void confirmTheDuplicatedLeadNameIsSameAsCapturedName() {
		String DuplicateLeadName = driver.findElementByXPath("//span[@id='viewLead_companyName_sp']").getText();
		System.out.println(DuplicateLeadName);

		if (DuplicateLeadName.contains("xxx")) {
			System.out.println("Duplicate-Lead-----Company name matched");
		} else {
			System.out.println(" Duplicate---Lead--Company name Not matched");
		}
		System.out.println("****Duplicate Lead CucumberFrameWork HW Done *******************");
	}



}
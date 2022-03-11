$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/doc.feature");
formatter.feature({
  "name": "Automate TestLeaf Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Launch Chromebrowser and load url",
  "keyword": "Given "
});
formatter.step({
  "name": "enter username as \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa"
      ]
    },
    {
      "cells": [
        "DemoCSR",
        "crmsfa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Launch Chromebrowser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.launchChromebrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.itsNavigatedHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickTheLogoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Launch Chromebrowser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.launchChromebrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoCSR",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.itsNavigatedHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickTheLogoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC003_CreateLead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Launch Chromebrowser and load url",
  "keyword": "Given "
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.step({
  "name": "click createLead",
  "keyword": "When "
});
formatter.step({
  "name": "enter the company as \u003ccompany\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter the firstname as \u003cfirstname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter the lastname as \u003clastname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter the phone number as tendigit",
  "keyword": "And "
});
formatter.step({
  "name": "choose source as website",
  "keyword": "And "
});
formatter.step({
  "name": "click the create lead button",
  "keyword": "And "
});
formatter.step({
  "name": "its navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the firstname",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "company",
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "ABC",
        "Hema",
        "Mali"
      ]
    },
    {
      "cells": [
        "TCS",
        "Gopi",
        "Nath"
      ]
    },
    {
      "cells": [
        "CTS",
        "Lakshmi",
        "Rai"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC003_CreateLead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Launch Chromebrowser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.launchChromebrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickLeadsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click createLead",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.clickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the company as ABC",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterTheCompanyAsABC(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the firstname as Hema",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterTheFirstnameAsHema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the lastname as Mali",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterTheLastnameAsMali(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the phone number as tendigit",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterThePhoneNumberAsTenDigit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose source as website",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.chooseSourceAsWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickTheCreateLeadButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.itsNavigatedViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the firstname",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.verifyTheFirstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC003_CreateLead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Launch Chromebrowser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.launchChromebrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickLeadsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click createLead",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.clickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the company as TCS",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterTheCompanyAsABC(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the firstname as Gopi",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterTheFirstnameAsHema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the lastname as Nath",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterTheLastnameAsMali(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the phone number as tendigit",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterThePhoneNumberAsTenDigit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose source as website",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.chooseSourceAsWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickTheCreateLeadButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.itsNavigatedViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the firstname",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.verifyTheFirstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC003_CreateLead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Launch Chromebrowser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.launchChromebrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterUsernameAsDemosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterPasswordAsCrmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click leads link",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickLeadsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click createLead",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.clickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the company as CTS",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterTheCompanyAsABC(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the firstname as Lakshmi",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterTheFirstnameAsHema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the lastname as Rai",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterTheLastnameAsMali(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the phone number as tendigit",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.enterThePhoneNumberAsTenDigit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose source as website",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.chooseSourceAsWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.clickTheCreateLeadButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated ViewLeadPage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.itsNavigatedViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the firstname",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.verifyTheFirstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
});
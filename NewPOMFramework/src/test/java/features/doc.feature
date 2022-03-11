Feature: Automate TestLeaf Application

@Smoke
Scenario Outline: TC001_Login and Logout

Given Launch Chromebrowser and load url
And enter username as <username>
And enter password as <password>
When click the login button
Then its navigated Homepage
And click the logout button
And close browser

Examples:
		|username|password|
		|DemoSalesManager|crmsfa|
		|DemoCSR|crmsfa|
		
@WIP
Scenario: TC002_Login and Logout for failure

Given Launch Chromebrowser and load url
And enter username as SSSSSS
And enter password as crmsfa
When click the login button
Then its navigated to same page
But verify error message 

And close browser

@Smoke
Scenario Outline: TC003_CreateLead

Given Launch Chromebrowser and load url
And enter username as demosalesmanager
And enter password as crmsfa
When click the login button
And click CRMSFA
And click leads link
When click createLead
And enter the company as <company>
And enter the firstname as <firstname>
And enter the lastname as <lastname>
And enter the phone number as tendigit
And choose source as website
And click the create lead button
Then its navigated ViewLeadPage
And verify the firstname
And close browser

Examples: 
		|company|firstname|lastname|
		|ABC|Hema|Mali|
		|TCS|Gopi|Nath|
		|CTS|Lakshmi|Rai|
 
@Functional
Scenario: TC004_EditLead

Given Launch Chromebrowser and load url
And enter username as demosalesmanager
And enter password as crmsfa
When click the login button	
And click CRMSFA
And click leads link
And click Find Leads
When enter firstname
And click Find Leads button
And click first resulting lead
Then navigated ViewLeadPage
And verify title of the page
And click on Edit
Then navigated Edit Lead page
And change the company name
And click update
And confirm changed name appears
And close browser

@Functional
Scenario: TC005_DeleteLead

Given Launch Chromebrowser and load url
And enter username as demosalesmanager
And enter password as crmsfa
When click the login button	
And click CRMSFA
And click leads link
When click Find Leads
 
And enter First Name as hema
And click Find Leads button
And capture lead ID of first resulting lead
And click first resulting lead
And click Delete
Then navigated MyLeadsPage
When click Find Leads
And enter captured lead ID
And click Find Leads button
And verify error msg
And close browser

@Functional
Scenario: TC005_DuplicateLead

Given Launch Chromebrowser and load url
And enter username as demosalesmanager
And enter password as crmsfa
When click the login button	
And click CRMSFA
And click leads link
When click Find Leads

And click on Email
And enter Email 
And click Find Leads button
And capture lead ID of first resulting lead
And click first resulting lead
And click duplicate lead
Then navigated Duplicate Lead Page
And verify title of the page
When click the create lead button
Then its navigated ViewLeadPage 
And Confirm the duplicated lead name is same as captured name
And close browser






















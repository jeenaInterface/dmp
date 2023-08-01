import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { fixture } from "../../hooks/pageFixture";
import * as data from "../../helper/util/test-data/loginCredentials.json"
import dmp from "../../pages/dmp";


setDefaultTimeout(60 * 1000 * 5)
let dmpPage: dmp


Given('User navigates to the dmp application', async function () {
    dmpPage = new dmp(fixture.page)
    await dmpPage.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
})

Given('User enter the username in dmp', async function () {
    await dmpPage.enterUserName(data.userNameDMP)

});

Given('User enter the password in dmp', async function () {
    await dmpPage.enterPassword(data.passwordDMP)
    console.log(data.passwordDMP);
})

// When('Enter Passcode', async function () {
//     await dgAlarmPortalPage.enterPassword() 
//     await fixture.page.waitForLoadState();
//     fixture.logger.info("Waiting for 2 seconds")
//     await fixture.page.waitForTimeout(2000);
// });

// When('Click on submit', async function () {
//     await dgAlarmPortalPage.clickSubmitButton() 
//     await fixture.page.waitForLoadState();
//     fixture.logger.info("Waiting for 2 seconds") 
// });

// When('Edit a contact and submit', async function () {
//     await dgAlarmPortalPage.FillDetails()
// });

//  When('Verify success message', async function () {
//     const OriginalMessage = await dgAlarmPortalPage.returnSuccessMessage()
//     const ExpectedSuccessMessage = "Contacts update successful. Please allow 2 business days for passcode changes to be applied to your system."
//     await fixture.page.waitForLoadState();
//     fixture.logger.info("Waiting for 2 seconds") 
//     if (ExpectedSuccessMessage === OriginalMessage) {
//         console.log("Contact details are updated");
//       } else {
//         throw new Error("No records updated");
//       }
//       await fixture.page.waitForLoadState();
//       fixture.logger.info("Waiting for 2 seconds")
//  })


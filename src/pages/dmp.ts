import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
const { randomValuePhone } = require('../helper/util/test-data/randomdata');
const { randomValuePasscode } = require('../helper/util/test-data/randomdata');
const { randomName } = require('../helper/util/test-data/randomdata');


export default class dmp {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {

        userName: "//input[@placeholder='Enter Email']",
        password: "//input[@placeholder='Password']",
        loginButton: "//input[@id='sign-in-submit']",
        securityCode: "//input[@id='auth-code']",
        submitButton: "//button[@type='submit']",
        
        searchIcon: "//span[text()='Search']",
        searchResult: "//span[text()='AGB0010']",
        contactList: "(//span[contains(text(),'Contact List')])[1]/./..",
        CodeToAssign41: "(//span[contains(text(), 'Code To Assign 041')])[1]",
        contactDeleteButton: "//md-icon[@md-font-icon='fa-trash-o']",
        OkayButtonInPopup: "//span[text()='Ok']",
        saveButtonOnTheTop: "(//md-icon[@md-font-icon='fa fa-save'])[1]",
        confirmCustomerCommentpopup: "//span[text()='Ok']",
        searchOnContact: "(//input[@ng-change='btCtrl.search()'])[1]"

    }

    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURLDMP);

    }
    async enterUserName(user: string) {
        await this.page.locator(this.Elements.userName).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.locator(this.Elements.password).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginButton);
    }

    
}
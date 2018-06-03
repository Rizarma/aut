require("dotenv").config();

const homepage = require("../pages/homepage");
const chai = require("chai");
const chaiwd = require("chai-webdriverio").default;

chai.use(chaiwd(browser));

describe("Loket homepage", () => {
    it("should open the right page", () => {
        browser.url(process.env.HOST);
        chai.expect(browser.getTitle()).to.equal(homepage.title);
    });
});

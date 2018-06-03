const homepage = require("../pages/homepage");
const chai = require("chai");
const chaiwd = require("chai-webdriverio").default;

chai.use(chaiwd(browser));

describe("test homepage", () => {
    it("should have the right title", () => {
        browser.url(process.env.HOST);
        chai.expect(browser.getTitle()).equal(homepage.title);
    });

    it("should have button buat eventmu sekarang", () => {
        browser.url(process.env.HOST);
        chai.expect(homepage.button_buat_event).there();
        browser.jepret("homepage.png");
    });
});

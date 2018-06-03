require("dotenv").config();
const assert = require("assert");
const homepage = require("../pages/homepage");

describe("Open homepage loket", () => {
    it("should have the right title", () => {
        browser.url(process.env.HOST);
        assert.equal(browser.getTitle(), homepage.title);
    });
});

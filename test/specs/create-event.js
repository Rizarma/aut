const chai = require("chai");
const chaiwd = require("chai-webdriverio").default;

chai.use(chaiwd(browser));

describe("test create event", () => {
    it("should be able to see help overlay", () => {
        browser.url(process.env.HOST + "/buat-event");
        chai.expect(browser.getTitle()).equal("Create Event - LOKET");
        browser.jepret("create-event-1.png");
    });

    it("should be able to create event", () => {
        browser.click('//*[@id="modal-tour"]/div/button');
        browser.jepret("create-event-2.png");
    });
});

const assert = require("assert");

describe("test homepage", () => {
    it("should have the right title", () => {
        browser.url(process.env.HOST);
        assert.equal(browser.getTitle(), "LOKET.COM: Buat Event Gratis, Atur & Jual Eventmu Sendiri");
    });

    it("should have button buat eventmu sekarang", () => {
        const button_buat_event = '//*[@id="landing-page"]/div/div[2]/a';
        const button_buat_event_value = browser.getText(button_buat_event);
        assert.equal(button_buat_event_value, "BUAT EVENTMU SEKARANG");
    });
});

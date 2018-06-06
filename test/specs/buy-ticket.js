const orderTicket = require("../pages/order-ticket");
const path = require("path");
const chai = require("chai");
const chaiwd = require("chai-webdriverio").default;

chai.use(chaiwd(browser));

describe("test order gopay", () => {
    it("should be able to open event page", () => {
        browser.url(process.env.HOST + "/event/testing");
        chai.expect(browser.getTitle()).to.be.equal("Test Only - LOKET");
        browser.jepret("order-1.png");
    });

    it("should be able to see kategori tiket", () => {
        browser.click(orderTicket.button_pesan_tiket);
        browser.pause(750);
        browser.jepret("order-2.png");
    });

    it("should be able to pick a paid ticket", () => {
        browser.click(orderTicket.button_tiket_berbayar);
        browser.pause(500);
    });

    it("ticket price should be equal to subtotal", () => {
        let price = browser.getText(orderTicket.harga_tiket_berbayar);
        const jumlah = browser.getValue(orderTicket.tambah_tiket_berbayar);
        let subtotal = browser.getText(orderTicket.tiket_subtotal);

        price = browser.strToInt(price);
        subtotal = browser.strToInt(subtotal);

        chai.expect(price).to.be.equal(subtotal);
        browser.jepret("order-3.png");
    });

    it("should be able to order", () => {
        browser.click(orderTicket.button_pesan_tiket);
        browser.jepret("order-4.png");
        browser.pause(750);
    });

    it("should be on personal information page", () => {
        chai.expect(browser.getUrl()).to.be.equal(process.env.HOST + "/event/Mn/personal-information");
        browser.jepret("order-5.png");
    });

    it("should be able to fill informasi personal", () => {
        browser.setValue(orderTicket.input_name, "Rizki Arya Malik");
        browser.setValue(orderTicket.input_mail, "rizarma@gmail.com");
        browser.setValue(orderTicket.input_phone, "89633931545");
        browser.jepret("order-6.png");
    });

    it("should be able to pick gopay", () => {
        browser.scroll(orderTicket.anchor_metode_pembayaran);
        browser.click(orderTicket.payment_gopay);
        browser.jepret("order-7.png");
    });

    it("should be able to bayar tiket", () => {
        browser.click(orderTicket.button_confirm_payment);
        browser.jepret("order-8.png");
        browser.pause(750);
    });

    it("should be on invoice page", () => {
        browser.waitForUrl(url => /invoice/.test(url));
        chai.expect(browser.getUrl()).include("invoice");
        browser.jepret("order-9.png");
    });
});

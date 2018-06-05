const buatEvent = require("../pages/buat-event");
const path = require("path");
const chai = require("chai");
const chaiwd = require("chai-webdriverio").default;

chai.use(chaiwd(browser));

describe("test create event", () => {
    it("should be able to see help overlay", () => {
        browser.url(process.env.HOST + "/buat-event");
        chai.expect(browser.getTitle()).equal("Create Event - LOKET");
        browser.jepret("create-event-1.png");
    });

    it("should be able to close help overlay", () => {
        browser.click(buatEvent.close_modal);
        browser.jepret("create-event-2.png");
    });

    it("should be able to create event", () => {
        const file = path.join(__dirname, "..", "..", "data", "img.jpg");
        browser.chooseFile(buatEvent.image_upload, file);
        browser.waitForVisible(buatEvent.image_preview, 30000);
        browser.waitForVisible(buatEvent.button_simpan_gambar, 3000);
        browser.click(buatEvent.button_simpan_gambar);
        browser.waitForExist(buatEvent.uploaded_image, 15000);
        browser.scroll(0, 500);
        browser.setValue(buatEvent.input_nama_event, "Lebaran Sebentar Lagi");
        browser.click(buatEvent.pilih_kategori);
        browser.click(buatEvent.kategori_1);
        browser.click(buatEvent.kategori_2);
        browser.click(buatEvent.kategori_3);
        browser.click(buatEvent.button_simpan_kategori);

        const file2 = path.join(__dirname, "..", "..", "data", "img2.png");
        browser.chooseFile(buatEvent.image_promotor, file2);
        browser.waitForExist(buatEvent.image_promotor_preview, 3000);
        browser.waitForVisible(buatEvent.button_simpan_gambar_promotor, 3000);
        browser.click(buatEvent.button_simpan_gambar_promotor);
        browser.waitForExist(buatEvent.image_promotor_ready, 15000);

        const ts = new Date().getTime();
        browser.setValue(buatEvent.input_promotor, "Testing " + ts);
        browser.click(buatEvent.pilih_tanggal);
        browser.click(buatEvent.tanggal_mulai);
        browser.click(buatEvent.tanggal_4);
        browser.click(buatEvent.button_tanggal_event);
        browser.click(buatEvent.button_simpan_tanggal);
        browser.waitForVisible(buatEvent.modal_tanggal, 3000, true);
        browser.click(buatEvent.pilih_lokasi);

        browser.setValue(buatEvent.nama_tempat, "Kosan");
        browser.pause(500);
        browser.setValue(buatEvent.cari_alamat, "Sa'aba 25B");
        browser.pause(500);
        browser.waitForExist(buatEvent.dropdown_alamat);
        browser.click(buatEvent.dropdown_alamat);
        browser.click(buatEvent.button_simpan_lokasi);
        browser.jepret("create-event-3.png");
    });
});

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

    it("should be able to upload banner", () => {
        const file = path.join(__dirname, "..", "..", "data", "img.jpg");
        browser.chooseFile(buatEvent.image_upload, file);
        browser.waitForVisible(buatEvent.image_preview, 30000);
        browser.waitForVisible(buatEvent.button_simpan_gambar, 3000);
        browser.jepret("create-event-3.png");
        browser.click(buatEvent.button_simpan_gambar);
        browser.waitForExist(buatEvent.uploaded_image, 15000);
    });

    it("should be able to fill event name", () => {
        browser.scroll(0, 400);
        browser.setValue(buatEvent.input_nama_event, "Lebaran Sebentar Lagi");
        browser.jepret("create-event-4.png");
    });

    it("should be able to pick categories", () => {
        browser.click(buatEvent.pilih_kategori);
        browser.click(buatEvent.kategori_1);
        browser.click(buatEvent.kategori_2);
        browser.click(buatEvent.kategori_3);
        browser.jepret("create-event-5.png");
        browser.click(buatEvent.button_simpan_kategori);
    });

    it("should be able to upload organizer avatar", () => {
        const file2 = path.join(__dirname, "..", "..", "data", "img2.png");
        browser.chooseFile(buatEvent.image_promotor, file2);
        browser.waitForExist(buatEvent.image_promotor_preview, 3000);
        browser.waitForVisible(buatEvent.button_simpan_gambar_promotor, 3000);
        browser.click(buatEvent.button_simpan_gambar_promotor);
        browser.waitForExist(buatEvent.image_promotor_ready, 15000);
        browser.jepret("create-event-6.png");
    });

    it("should be able to fill organizer name", () => {
        const ts = new Date().getTime();
        browser.setValue(buatEvent.input_promotor, "Testing " + ts);
        browser.jepret("create-event-7.png");
    });

    it("should be able to set event date", () => {
        browser.click(buatEvent.pilih_tanggal);
        browser.click(buatEvent.tanggal_mulai);
        browser.click(buatEvent.tanggal_4);
        browser.setDate('[name="event-end-daterange"]', "09 Jun 2018");
        browser.click(buatEvent.button_tanggal_event);
        browser.click(buatEvent.button_simpan_tanggal);
        browser.waitForVisible(buatEvent.modal_tanggal, 3000, true);
        browser.jepret("create-event-8.png");
    });

    it("should be able to set location", () => {
        browser.click(buatEvent.pilih_lokasi);
        browser.setValue(buatEvent.nama_tempat, "Kosan Rizki Arya Malik");
        browser.pause(500);
        browser.setValue(buatEvent.cari_alamat, "Sa'aba 25B");
        browser.pause(500);
        browser.waitForExist(buatEvent.dropdown_alamat);
        browser.click(buatEvent.dropdown_alamat);
        browser.pause(500);
        browser.waitForVisible(buatEvent.button_simpan_lokasi, 3000);
        browser.click(buatEvent.button_simpan_lokasi);
        browser.waitForVisible(buatEvent.modal_lokasi, 3000, true);
        browser.jepret("create-event-9.png");
    });

    // it("should be able to create paid ticket", () => {
    //     browser.click(buatEvent.tiket_berbayar);
    //     browser.setValue(buatEvent.nama_tiket_berbayar, "Berbayar");
    //     browser.click(buatEvent.jumlah_tiket_berbayar);
    //     browser.setValue(buatEvent.jumlah_tiket_berbayar, "200");
    //     browser.setValue(buatEvent.harga_tiket_berbayar, "15000");
    //     browser.setValue(buatEvent.deskripsi_tiket_berbayar, "Khusus untuk yang punya uang");
    //     browser.click(buatEvent.button_selanjutnya_berbayar);
    //     browser.click(buatEvent.tanggal_mulai_berbayar);
    //     browser.click("/html/body/div[9]/div[1]/div[2]/table/tbody/tr[2]/td[7]");
    //     browser.click(buatEvent.tanggal_berakhir_berbayar);
    //     browser.click(buatEvent.tanggal_berakhir_pick);
    //     browser.click(buatEvent.button_buat_tiket_berbayar);
    //     browser.jepret("create-event-10.png");
    // });
});

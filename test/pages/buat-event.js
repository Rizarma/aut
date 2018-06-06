function Page() {
    this.close_modal = '//*[@id="modal-tour"]/div/button';
    this.image_upload =
        "/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div/div/div[1]/div[1]/ul/li/div/div/div/div/div[1]/input";
    this.image_preview = '//*[@id="croppie"]/div[1]/img';
    this.uploaded_image =
        "/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div/div/div[1]/div/ul/li/div/div[2]/button[1]/span";
    this.button_simpan_gambar = '//*[@id="modal-upload-image"]/div/div[2]/div[4]/div/div[3]/button';
    this.input_nama_event = "#create-event-name";
    this.pilih_kategori = "/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div/div/div[2]/div/div[2]/div/div";
    this.kategori_1 = '//*[@id="modal-category"]/div/div/div[1]/div/div[1]/div/button[1]';
    this.kategori_2 = '//*[@id="modal-category"]/div/div/div[1]/div/div[1]/div/button[2]';
    this.kategori_3 = '//*[@id="modal-category"]/div/div/div[1]/div/div[1]/div/button[16]';
    this.button_simpan_kategori = '//*[@id="save-category"]';
    this.image_promotor = '//*[@id="fileItem"]';
    this.image_promotor_preview = '//*[@id="croppie-org"]/div[1]/img';
    this.image_promotor_ready =
        "/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div/div/div[2]/div/div[3]/div/div[1]/div/img";
    this.input_promotor = '//*[@id="organizer_name"]';
    this.button_simpan_gambar_promotor = '//*[@id="modal-upload-image-org"]/div/div[2]/div[2]/button[2]';

    // Event Date
    this.pilih_tanggal = '//*[@id="date-event"]/span[2]';
    this.tanggal_mulai = '//*[@id="modal-event-date-time"]/div/div/ul[2]/li[1]/div[1]/div/div/input';
    this.calendar_end = "/html/body/div[10]";
    this.tanggal_berakhir = '//*[@id="endDate"]';
    this.tanggal_4 = "/html/body/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[4]";
    this.tanggal_9 =
        "body > div:nth-child(15) > div.calendar.left.single > div.calendar-table > table > tbody > tr:nth-child(2) > td.weekend.available";
    this.button_tanggal_event = '//*[@id="modal-event-date-time"]/div/div/ul[2]/li[1]/div[3]/button';
    this.button_simpan_tanggal = '//*[@id="modal-event-date-time"]/div/div/ul[2]/li[2]/div[3]/div[2]/button';
    this.icon_edit_tanggal = '//*[@id="date-event"]/span[3]';
    this.modal_tanggal = "#modal-event-date-time";

    // Lokasi
    this.pilih_lokasi = "/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div/div/div[2]/div/div[5]/div/div/a";
    this.nama_tempat = '//*[@id="venue_name"]';
    this.cari_alamat = '//*[@id="search_location"]';
    this.dropdown_alamat = '//*[@id="loc-list"]/ul/li[1]';
    this.button_simpan_lokasi = '//*[@id="save-location"]';
    this.modal_lokasi = '//*[@id="modal-location"]';

    // Kategori Tiket
    this.tiket_berbayar =
        "/html/body/div[1]/div/div[3]/div[2]/div[2]/div/div/ul[2]/li[1]/div[2]/div[1]/div/div[1]/button";
    this.nama_tiket_berbayar = '//*[@id="ticket-name"]';
    this.jumlah_tiket_berbayar = '//*[@id="ticket-quantity"]';
    this.harga_tiket_berbayar = '//*[@id="ticket-price"]';
    this.deskripsi_tiket_berbayar = '//*[@id="descriptionTicket"]';
    this.button_selanjutnya_berbayar = '//*[@id="switcher-form-detail"]/li[1]/div[2]/button';
    this.tanggal_mulai_berbayar = '//*[@id="switcher-form-detail"]/li[2]/div[1]/div/div[1]/input';
    this.tanggal_mulai_pick = "/html/body/div[9]/div[1]/div[2]/table/tbody/tr[2]/td[4]";
    this.tanggal_berakhir_berbayar = '//*[@id="switcher-form-detail"]/li[2]/div[2]/div/div[1]/input';
    this.tanggal_berakhir_pick = "/html/body/div[9]/div[1]/div[2]/table/tbody/tr[2]/td[4]";
    this.button_buat_tiket_berbayar = '//*[@id="switcher-form-detail"]/li[2]/div[3]/div/div[2]/button[2]/span';

    this.tiket_gratis =
        "/html/body/div[1]/div/div[3]/div[2]/div[2]/div/div/ul[2]/li[1]/div[2]/div[1]/div/div[2]/button";
}

module.exports = new Page();

function Page() {
    // view event
    this.button_pesan_tiket = "#order-ticket";

    // kategori tiket
    this.button_tiket_berbayar =
        "/html/body/div[2]/div[1]/div[2]/div/div[2]/ul[2]/li[2]/div[1]/div[2]/div[2]/div[3]/div/div/a[2]";
    this.harga_tiket_berbayar =
        "/html/body/div[2]/div[1]/div[2]/div/div[2]/ul[2]/li[2]/div[1]/div[2]/div[2]/div[2]/div/b";
    this.tambah_tiket_berbayar = '//*[@id="ticket-qty-1537"]';
    this.tiket_subtotal = '//*[@id="sub-total-price"]';

    // personal information
    this.input_name = '//*[@id="input-name"]';
    this.input_mail = '//*[@id="input-email"]';
    this.input_phone = '//*[@id="input-phone"]';
    this.anchor_metode_pembayaran = "/html/body/div[1]/div/div/div/div[4]/div[1]/div[1]";
    this.payment_gopay = '//*[@id="list-payment-id"]/label[5]';
    this.button_confirm_payment = '//*[@id="confirm-payment"]';
}

module.exports = new Page();

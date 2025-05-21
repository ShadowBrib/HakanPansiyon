document.addEventListener("DOMContentLoaded", () => {
// URL'den oda ID'sini al
const params = new URLSearchParams(window.location.search);
const odaId = params.get("id");

// Oda bilgileri
const odaBilgileri = {
    "1": {
        baslik: "Oda 1 - Aile Odası",
        aciklama: "Bu oda tek kişilik konaklamalar için uygundur. TV, Wi-Fi, klima ve özel banyo mevcuttur.",
        fiyat: "Gecelik: 500 TL",
        resim: "../resimler/oda 1.jpg",
        yorumsahibi: "FATİH T.",
        yorum: "Temiz odalar ve harika konum! Personel çok yardımcıydı."
        
    },
    "2": {
        baslik: "Oda 2 - Çift Kişilik",
        aciklama: "Geniş çift kişilik yataklı oda. Balkon, Wi-Fi, klima ve banyo içerir.",
        fiyat: "Gecelik: 350 TL",
        resim: "../resimler/oda 2.jpg",
        yorumsahibi: "OKAN B.",
        yorum: "Fiyat-performans açısından mükemmel bir pansiyon. Tavsiye ederim."
    },
    "3": {
        baslik: "Oda 3 - Aile Odası",
        aciklama: "Aileler için ideal. 1 çift kişilik + 2 tek kişilik yatak. Klima, mini buzdolabı, banyo.",
        fiyat: "Gecelik: 500 TL",
        resim: "../resimler/oda 3.jpg",
        yorumsahibi: "ARDA T.",
        yorum: "Denize çok yakın, sabah kahvaltısı lezzetliydi."
    },
    "4": {
        baslik: "Oda 4 - çift Kişilik",
        aciklama: "Bu oda tek kişilik konaklamalar için uygundur. TV, Wi-Fi, klima ve özel banyo mevcuttur.",
        fiyat: "Gecelik: 350 TL",
        resim: "../resimler/oda 4.jpg",
        yorumsahibi: "TUGBA A.",
        yorum: "Tüm personele tek tek teşekkürlerimi iletiyorum. Mukemmel bir tatildi."
    },
    "5": {
        baslik: "Oda 5 - Çift Kişilik",
        aciklama: "Geniş çift kişilik yataklı oda. Balkon, Wi-Fi, klima ve banyo içerir.",
        fiyat: "Gecelik: 350 TL",
        resim: "../resimler/oda 5.jpg",
        yorumsahibi: "ALTAY D.",
        yorum: "Aileyele geçirilecek en güzel pansiyon diyebilirim."
    }
};

// İçerik oluştur
const detayContainer = document.getElementById("oda-detay");
const oda = odaBilgileri[odaId];

if (oda) {
    detayContainer.innerHTML = `
        <h2>${oda.baslik}</h2>
        <img src="${oda.resim}" alt="${oda.baslik}" width="400">
        <p>${oda.aciklama}</p>
        <h3>${oda.fiyat}</h3>
        <button>Rezervasyon Yap</button>
    `;
} else {
    detayContainer.innerHTML = `<p>Geçersiz oda seçimi. Lütfen ana sayfaya dönün.</p>`;
}
});
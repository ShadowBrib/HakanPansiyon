// URL'den oda ID'sini al
const params = new URLSearchParams(window.location.search);
const odaId = params.get("id");

// Oda bilgileri
const odaBilgileri = {
    "oda1": {
        baslik: "Oda 1 - Tek Kişilik",
        aciklama: "Bu oda tek kişilik konaklamalar için uygundur. TV, Wi-Fi, klima ve özel banyo mevcuttur.",
        fiyat: "Gecelik: 250 TL",
        resim: "../resimler/oda 1.jpg"
    },
    "oda2": {
        baslik: "Oda 2 - Çift Kişilik",
        aciklama: "Geniş çift kişilik yataklı oda. Balkon, Wi-Fi, klima ve banyo içerir.",
        fiyat: "Gecelik: 350 TL",
        resim: "../resimler/oda 2.jpg"
    },
    "oda3": {
        baslik: "Oda 3 - Aile Odası",
        aciklama: "Aileler için ideal. 1 çift kişilik + 2 tek kişilik yatak. Klima, mini buzdolabı, banyo.",
        fiyat: "Gecelik: 500 TL",
        resim: "../resimler/oda 3.jpg"
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
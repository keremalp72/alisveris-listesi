let urunler = [];

let urunSayisi = Number(prompt('Kaç adet ürün eklemek istiyorsunuz'));

let urunIsimleri;

function urunEkle(){
    for(let i = 0; i < urunSayisi; i++){
        urunIsimleri = prompt('eklemek istediğiniz ürünleri giriniz');

        urunler.push(urunIsimleri);
    }
    console.log(`eklenen ürünler: ${urunler} \n dizi içinde ${urunSayisi} tane eleman var`);
}
urunEkle();

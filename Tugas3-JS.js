// Array produk toko
let produkToko = [
   { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
   { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
   { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi menambah produk
function tambahProduk(nama, harga, stok) {
   let idBaru = produkToko.length + 1;

   let produkBaru = {
      id: idBaru,
      nama: nama,
      harga: harga,
      stok: stok
   };

   produkToko.push(produkBaru);
   console.log("Produk berhasil ditambahkan");
}

// Fungsi menghapus produk
function hapusProduk(id) {
   for (let i = 0; i < produkToko.length; i++) {
      if (produkToko[i].id === id) {
         produkToko.splice(i, 1);
         console.log("Produk dengan ID " + id + " berhasil dihapus");
         return;
      }
   }
   console.log("Produk tidak ditemukan");
}

// Fungsi menampilkan produk
function tampilkanProduk() {
   console.log("===== DAFTAR PRODUK =====");
   for (let i = 0; i < produkToko.length; i++) {
      console.log(
         "ID: " + produkToko[i].id +
         ", Nama: " + produkToko[i].nama +
         ", Harga: " + produkToko[i].harga +
         ", Stok: " + produkToko[i].stok
      );
   }
   console.log("=========================");
}


// Menjalankan program
tampilkanProduk();

tambahProduk("Headset", 150000, 8);

tampilkanProduk();

hapusProduk(2);

tampilkanProduk();
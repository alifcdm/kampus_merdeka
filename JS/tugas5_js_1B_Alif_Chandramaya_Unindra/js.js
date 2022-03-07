let produk = {
  tv: 'TV',
  ac: 'AC',
  kulkas: 'Kulkas',
};

let text = '';

for (let i in produk) {
  text += `<option value=${produk[i]}>${produk[i]}</option>`;
}
document.getElementById('brg').innerHTML = `<select id="barang">${text}</select>`;

// console.log(j);
Swal.fire('Any fool can use a computer');
function proses() {
  let nama = document.getElementById('nama').value;
  let jml = parseInt(document.getElementById('jmlh').value);
  let produkinp = document.getElementById('barang').value;
  let diskon;
  let harga;
  let rp = Intl.NumberFormat('id-ID');

  switch (produkinp) {
    case 'TV':
      harga = 2000000;
      break;
    case 'AC':
      harga = 3000000;
      break;
    case 'Kulkas':
      harga = 5000000;
      break;
    default:
      harga = 0;
      break;
  }

  let kotor = harga * jml;

  if (produkinp == 'Kulkas' && jml >= 3) {
    diskon = 0.3 * kotor;
  } else if (produkinp == 'AC' && jml >= 3) {
    diskon = 0.2 * kotor;
  } else {
    diskon = 0.1 * kotor;
  }

  let bersih = kotor - diskon;
  let ppn = 0.1 * bersih;
  let total = harga - diskon + ppn;

  alert(
    'Nama Pelanggan: ' +
      nama +
      '\nProduk yang dibeli: ' +
      produkinp +
      '\nHarga satuan: ' +
      rp.format(harga) +
      '\nJumlah item yang dibeli: ' +
      jml +
      '\nHarga Kotor: ' +
      rp.format(kotor) +
      '\nDiskon: ' +
      rp.format(diskon) +
      '\nPPN: ' +
      rp.format(ppn) +
      '\nTotal: ' +
      rp.format(total)
  );
}

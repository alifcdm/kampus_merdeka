let i = 1;
//membuat array untuk seluruh data yang telah masuk
let tempData = [];
class Gempa {
  angka = 0;
  tempat = '';
  dampak = '';

  constructor(lokasi, skala) {
    this.tempat = lokasi;
    this.angka = skala;
  }
  hitungDampak() {
    if (this.angka >= 0 && this.angka <= 2) {
      this.dampak = 'Tidak terasa';
    } else if (this.angka > 2 && this.angka <= 4) {
      this.dampak = 'Bangunan retak-retak';
    } else if (this.angka > 4 && this.angka <= 6) {
      this.dampak = 'Bangunan roboh';
    } else {
      this.dampak = 'Bangunan roboh dan berpotensi tsunami';
    }

    let text = '';
    //membuat array untuk data yang akan ditampilkan
    var data = { skala: this.angka, lok: this.tempat, dampak: this.dampak };
    tempData.push(data);
    console.log(tempData);
    //menambahkan inputan ke dalam table dengan index array
    let a = `<tr>
    <td>${i}</td>
    <td>${tempData[i - 1].lok}</td>
    <td>${tempData[i - 1].skala}</td>
    <td>${tempData[i - 1].dampak}</td>
    </tr>`;
    text += a;
    i += 1;
    //memanggil data yang telah diinput ke html
    document.getElementById('data').innerHTML += text;
  }
}

//membuat function untuk dipanggil dionclick
function panggil() {
  let skal = document.getElementById('skal').value;
  let lok = document.getElementById('lok').value;

  //cara memanggil function di dalam class
  let panggilDampak = new Gempa(lok, skal);

  if (skal != '' && skal != 0 && lok != 0 && lok != '') {
    panggilDampak.hitungDampak();
  } else {
    alert('Harap input semua data terlebih dahulu!');
  }
}

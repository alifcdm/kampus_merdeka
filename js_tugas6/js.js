let angka1, angka2, hasil;
function num1(x) {
  x.style.background = 'yellow';
}

function num2(y) {
  y.style.background = 'yellow';
}
function plus() {
  angka1 = parseFloat(document.getElementById('angka1').value);
  angka2 = parseFloat(document.getElementById('angka2').value);
  hasil = angka1 + angka2;
  document.getElementById('hasil').value = hasil;
}
function kurang() {
  angka1 = document.getElementById('angka1').value;
  angka2 = document.getElementById('angka2').value;
  hasil = angka1 - angka2;
  document.getElementById('hasil').value = hasil;
}
function kali() {
  angka1 = document.getElementById('angka1').value;
  angka2 = document.getElementById('angka2').value;
  hasil = angka1 * angka2;
  document.getElementById('hasil').value = hasil;
}
function bagi() {
  angka1 = document.getElementById('angka1').value;
  angka2 = document.getElementById('angka2').value;
  hasil = angka1 / angka2;
  document.getElementById('hasil').value = hasil;
}
function pangkat() {
  angka1 = document.getElementById('angka1').value;
  angka2 = document.getElementById('angka2').value;
  hasil = angka1 ** angka2;
  document.getElementById('hasil').value = hasil;
}
function batal() {
  document.getElementById('hasil').value = '';
  document.getElementById('angka1').value = '';
  document.getElementById('angka2').value = '';
}

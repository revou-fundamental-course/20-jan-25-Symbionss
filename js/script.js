function calculation() {
  // deklarasi konstanta
  const jk = document.getElementById("input-jk").value; //mengambil nilai jenis kelamin
  const u = document.getElementById("input-usia").value; // mengambil nilai usia
  const bb = parseFloat(document.getElementById("input-bb").value); // mengambil nilai berat badan
  const tb = parseFloat(document.getElementById("input-tb").value / 100); // menambil nilai tinggi badan
  const BMI = parseFloat(bb / (tb * tb)); // mengkalkulasi BMI

  // validasi input
  if (!jk || !u || bb == "" || tb == "") { // validasi jika salah satu data bernilai kosong
    const result = document.getElementById("resultbox"); 
    result.style.display = "block"; // (memunculkan div result) mengubah display dari result dengan id "resultbox" menjadi block
    document.getElementById("result").textContent =
      "Harap mengisi data yang ada";
  } else if (bb <= 0 || tb <= 0) { // validasi jika berat badan atau tinggi badan di bawah 0 (tidak valid)
    const result = document.getElementById("resultbox");
    result.style.display = "block";
    document.getElementById("result").textContent =
      "Harap mengisi data yang valid";
  } else {
    const result = document.getElementById("resultbox"); 
    result.style.display = "flex";
    if (BMI < 18.5) { // range pertama BMI (dibawah 18.5)
      document.getElementById("result2").textContent = BMI.toFixed(2); // mendisplay nilai BMI
      document.getElementById("result").textContent =
        " Kekurangan berat badan ";
        document.getElementById("result3").textContent =
        " Kamu dianjurkan untuk menaikan berat badan ";
        konsultasi(); // memanggin function konsultasi
    } else if (BMI >= 18.5 && BMI <= 24.9) { // range kedua BMI (diantara 18.5 dan 24.9)
      document.getElementById("result2").textContent = BMI.toFixed(2);
      document.getElementById("result").textContent = " Berat badan normal ";
      document.getElementById("result3").textContent =
      " Pertahankan! ";
      konsultasi();
    } else if (BMI > 24.9 && BMI <= 29.9) { // range ketiga BMI (diantara 25 dan 29.9)
      document.getElementById("result2").textContent = BMI.toFixed(2);
      document.getElementById("result").textContent =
        " Berat badan berlebihan ";
        document.getElementById("result3").textContent =
        " Kamu dianjurkan untuk menurunkan berat badan ";
        konsultasi();
    } else if (BMI > 29.9) { // range keempat BMI (diatas 30)
      document.getElementById("result2").textContent = BMI.toFixed(2);
      document.getElementById("result").textContent = " Kegemukan (Obesitas) ";
      document.getElementById("result3").textContent =
      " Kamu sangat dianjurkan menurunkan berat badan \n Disarankan berkonsultasi ";
      konsultasi();
    }
  }
}
function konsultasi(){
    const btn = document.getElementById("konsul-button");
    btn.style.display = "flex" // (memunculkan button consultasi) mengubah display dari button dengan id "konsul-button" menjadi flex
}

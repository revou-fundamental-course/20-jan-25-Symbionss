function calculation() {
  const jk = document.getElementById("input-jk").value;
  const u = document.getElementById("input-usia").value;
  const bb = parseFloat(document.getElementById("input-bb").value);
  const tb = parseFloat(document.getElementById("input-tb").value / 100);
  const BMI = parseFloat(bb / (tb * tb));

  if (!jk || !u || bb == "" || tb == "") {
    const result = document.getElementById("resultbox");
    result.style.display = "block";
    document.getElementById("result").textContent =
      "Harap mengisi data yang ada";
  } else if (bb <= 0 || tb <= 0) {
    const result = document.getElementById("resultbox");
    result.style.display = "block";
    document.getElementById("result").textContent =
      "Harap mengisi data yang valid";
  } else {
    const result = document.getElementById("resultbox");
    result.style.display = "flex";
    if (BMI < 18.5) {
      document.getElementById("result2").textContent = BMI.toFixed(2);
      document.getElementById("result").textContent =
        " Kekurangan berat badan ";
        document.getElementById("result3").textContent =
        " Kamu dianjurkan untuk menaikan berat badan ";
        konsultasi();
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      document.getElementById("result2").textContent = BMI.toFixed(2);
      document.getElementById("result").textContent = " Berat badan normal ";
      document.getElementById("result3").textContent =
      " Pertahankan! ";
      konsultasi();
    } else if (BMI > 24.9 && BMI <= 29.9) {
      document.getElementById("result2").textContent = BMI.toFixed(2);
      document.getElementById("result").textContent =
        " Berat badan berlebihan ";
        document.getElementById("result3").textContent =
        " Kamu dianjurkan untuk menurunkan berat badan ";
        konsultasi();
    } else if (BMI > 29) {
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
    btn.style.display = "flex"
}

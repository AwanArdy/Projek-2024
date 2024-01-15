// mendapatkan elemen-elemen HTML yang diperlukan
const textInput = document.getElementById("text-input"); // input untuk pengguna
const checkButton = document.getElementById("check-btn"); // tombol untuk memeriksa apakah input adalah palindrom atau tidak
const result = document.getElementById("result"); // hasil dari pemeriksaan palindrom

// Fungsi untuk memeriksa apakah input adalah palindrom
const checkBtn = (input) => {
  const originalInput = input; // menyimpan nilai input

  // memeriksa jika input kosong
  if (input === "") {
    alert("Please input a value");
    return;
  }

  // membersihkan hasil yang sebelumnya
  result.replaceChildren();

  // menghilangkan karakter non-alphanumeric dan mengonversi ke huruf kecil
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

  // menentukan hasil berdasarkan input adlah palindrom atau tidak
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join("") ? "is" : "is not"
  } a palindrome.`;

  // membuat elemen paragraf untuk menampilkan pesan hasil
  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;

  // menambahkan elemen paragraf ke dalam elemen hasil
  result.appendChild(pTag);

  // menampilkan elemen hasil
  result.classList.remove("hidden");
};

// menambahkan event listener untuk tombol periksa
checkButton.addEventListener("click", () => {
  checkBtn(textInput.value); // memanggil fungsi periksa dengan niai input dan mengosongkan input
  textInput.value = "";
});

// menambahkan event listener untuk tombol enter pada input
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkBtn(textInput.value); // memanggil fungsi periksa dengan nilai input dan mengosongkan input
    textInput.value = "";
  }
});

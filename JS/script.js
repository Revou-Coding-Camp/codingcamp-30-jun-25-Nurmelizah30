// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const form = document.querySelector("form");
const namaInput = document.querySelector('input[placeholder="nama"]');
const emailInput = document.querySelector('input[placeholder="email"]');
const noHpInput = document.querySelector('input[placeholder="no hp"]');

form.addEventListener("submit", (e) => {
  const nama = namaInput.value.trim();
  const email = emailInput.value.trim();
  const noHp = noHpInput.value.trim();

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    e.preventDefault();
    namaInput.focus();
  } else if (email === "") {
    alert("Email tidak boleh kosong!");
    e.preventDefault();
    emailInput.focus();
  } else if (!validateEmail(email)) {
    alert("Format email tidak valid!");
    e.preventDefault();
    emailInput.focus();
  } else if (noHp === "") {
    alert("No HP tidak boleh kosong!");
    e.preventDefault();
    noHpInput.focus();
  } else if (!validateNoHp(noHp)) {
    alert("Format No HP tidak valid!");
    e.preventDefault();
    noHpInput.focus();
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validateNoHp(noHp) {
  const noHpRegex = /^08[0-9]{8,12}$/;
  return noHpRegex.test(noHp);
}

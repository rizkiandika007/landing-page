// theme.js
function setTheme(theme) {
  document.body.className = ""; // reset
  if (theme) {
    document.body.classList.add(theme);
  }
  localStorage.setItem("theme", theme);
}

// load theme waktu buka ulang halaman
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "";
  setTheme(savedTheme);

  // set dropdown ke value terakhir
  const selector = document.getElementById("theme-switcher");
  if (selector) selector.value = savedTheme;

  // event listener kalau user ganti pilihan
  if (selector) {
    selector.addEventListener("change", (e) => {
      setTheme(e.target.value);
    });
  }
};

const themeToggle = document.getElementById("theme-toggle");
console.log(themeToggle);
const currentTheme = localStorage.getItem("theme");

// Apply saved theme
if (currentTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "🌞";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

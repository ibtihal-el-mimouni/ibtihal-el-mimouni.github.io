(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  // Get stored theme if the user has chosen before
  const storedTheme = localStorage.getItem("theme");

  // Default to light if nothing stored
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme =
    storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : (systemPrefersDark ? "dark" : "light");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Update button label/icon
    toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    toggleBtn.title =
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    toggleBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  // Apply initial theme (light by default)
  applyTheme(initialTheme);

  // Toggle between light and dark on click
  toggleBtn.addEventListener("click", function () {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  });
})();


// === Scroll progress bar ===
function updateScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  const scrollTop =
    window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = percent + "%";
}

document.addEventListener("DOMContentLoaded", updateScrollProgress);
window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("resize", updateScrollProgress);


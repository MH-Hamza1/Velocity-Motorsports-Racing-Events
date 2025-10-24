// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Countdown timer
function updateCountdown() {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  // Set the target date (14 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);

  function update() {
    const now = new Date();
    const difference = targetDate - now;

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    days.textContent = d.toString().padStart(2, "0");
    hours.textContent = h.toString().padStart(2, "0");
    minutes.textContent = m.toString().padStart(2, "0");
    seconds.textContent = s.toString().padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

updateCountdown();

// Mobile menu toggle
  // document.querySelector(".menu-toggle").addEventListener("click", function () {
  // document.querySelector(".nav-links").classList.toggle("active");

  const header = document.querySelector("[data-header]");
  const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

  menuToggleBtn.addEventListener("click", function () {
    header.classList.toggle("nav-active");
    this.classList.toggle("active");
    // this.style.transition = 'all 0.5s ease-in-out';
  });
// });

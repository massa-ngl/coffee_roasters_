document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menuIcon");
  const navBar = document.querySelector("#navMenu");

  if (menuButton && navBar) {
    menuButton.addEventListener("click", () => {
      navBar.classList.toggle("active");
    });
  }

  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(acc => {
    acc.addEventListener("click", () => {
      acc.classList.toggle("active");
      const panel = acc.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});

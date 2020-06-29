const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-menu-active");
    burger.classList.toggle("toggle");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linksFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

navSlide();

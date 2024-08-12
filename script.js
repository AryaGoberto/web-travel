const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const carousel = document.querySelector(".carousel");

nextButton.addEventListener("click", () => {
  carousel.scrollBy({ left: 350, behavior: "smooth" });
});

prevButton.addEventListener("click", () => {
  carousel.scrollBy({ left: -350, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleArrow = document.getElementById("toggleArrow");
  const companyDetails = document.getElementById("companyDetails");
  const arrowIcon = document.getElementById("arrowIcon");

  toggleArrow.addEventListener("click", function () {
    if (companyDetails.classList.contains("hidden")) {
      companyDetails.classList.remove("hidden");
      arrowIcon.src = "./img/footer/up.svg"; // Ubah panah ke atas
    } else {
      companyDetails.classList.add("hidden");
      arrowIcon.src = "./img/footer/down.svg"; // Ubah panah ke bawah
    }
  });
});



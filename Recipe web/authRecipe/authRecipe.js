document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navOverlay = document.querySelector(".nav-overlay");
  const cancelToggle = document.querySelector(".cancel-toggle");

  // Initially hide the nav overlay
  navOverlay.style.display = "none";

  menuToggle.addEventListener("click", function () {
    // Toggle the display of the nav overlay
    if (
      navOverlay.style.display === "none" ||
      navOverlay.style.display === ""
    ) {
      navOverlay.style.display = "flex";
    } else {
      navOverlay.style.display = "none";
    }
  });

  cancelToggle.addEventListener("click", function () {
    // Hide the nav overlay when cancel toggle is clicked
    navOverlay.style.display = "none";
  });

  const navLinks = document.querySelectorAll(".nav-route a");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      // Hide the nav overlay when a nav link is clicked
      navOverlay.style.display = "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var accountButton = document.querySelectorAll(".account-button");

  accountButton.forEach(function (button) {
    button.addEventListener("click", function () {
      var dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("show");
    });
  });

  var cancelToggle = document.querySelector(".cancel-toggle");
  var navOverlay = document.querySelector(".nav-overlay");

  cancelToggle.addEventListener("click", function () {
    navOverlay.style.display = "none";
  });

  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  menuToggle.addEventListener("click", function () {
    navOverlay.style.display = "flex";
  });
});

function rateRecipe(starCount) {
  const stars = document.querySelectorAll(".stars span");

  // Loop through all stars
  stars.forEach((star, index) => {
    if (index < starCount) {
      star.classList.add("selected"); // Apply selected style
    } else {
      star.classList.remove("selected"); // Remove selected style
    }
  });
}


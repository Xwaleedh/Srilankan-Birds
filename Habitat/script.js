//Scroll To Desire Section

window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll(".main-section");
  var navigationLinks = document.querySelectorAll("#nav-items a");

  var currentSection = "";

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop - window.innerHeight / 2 &&
      window.scrollY < sectionTop + sectionHeight - window.innerHeight / 2
    ) {
      currentSection = section.getAttribute("id");
    }
  });
  navigationLinks.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

//Responsive Toggler
$(document).ready(function () {
  $("#bar").click(function () {
    $("#nav-items").toggleClass("responsive");
  });
});

//Responsive Nav Closing Logics
// When the user clicks anywhere outside of the nav, close it
window.onclick = function (event) {
  if (!event.target.closest("#nav-items") && !event.target.closest("#bar")) {
    $("#nav-items").removeClass("responsive");
  }
};
// Close the nav when a navigation item is clicked
$("#nav-items a").click(function () {
  $("#nav-items").removeClass("responsive");
});
// Close the nav when 'Subscribe Us' is clicked
$("#sub").click(function () {
  $("#nav-items").removeClass("responsive");
});

//Background image Compatible checker and Fixer
/*maxheight = 500;
minWidth = 600;

if (window.innerWidth <= minWidth && window.innerHeight >= maxheight) {
  document.getElementById("container-main").style.height = "50%";
}*/

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

const headerUl = document.querySelector("header nav ul");
const headerUlLis = document.querySelectorAll("header nav ul li a");
const toggleIcon = document.querySelector(".toggle-menu");

// Start Header Nav
function openHeaderUl() {
  if (headerUl.classList.contains("open")) {
    headerUl.style.opacity = "0";
    setTimeout(() => {
      headerUl.classList.remove("open");
    }, 300);
  } else {
    headerUl.classList.add("open");
    setTimeout(() => {
      headerUl.style.opacity = "1";
    }, 0);
  }
}

toggleIcon.onclick = () => {
  openHeaderUl();
};

headerUlLis.forEach((one) => {
  one.onclick = () => {
    openHeaderUl();
  };
});
// End Header Nav

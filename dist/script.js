const headerB = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 100){
    headerB.classList.add("shadowB")
  }else{
    headerB.classList.remove("shadowB");
  }
})


const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__navM");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});



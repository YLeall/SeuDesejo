const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const menuCloseLista = doc.querySelector(".desejo-listar");
const menuCloseContato = doc.querySelector(".contatar");
const menuCloseDuvidas = doc.querySelector(".duvidas-fre");
const menuCloseLogin = doc.querySelector(".log-moda");
const menuTransition = doc.querySelector(".menu-mobile");

menuOpen.addEventListener("click", () => {
  menuTransition.classList.add("menu-mobile--active");
});

menuClose.addEventListener("click", () => {
  menuTransition.classList.remove("menu-mobile--active");
});

menuCloseLista.addEventListener("click", () => {
  menuTransition.classList.remove("menu-mobile--active");
});

menuCloseContato.addEventListener("click", () => {
  menuTransition.classList.remove("menu-mobile--active");
});

menuCloseDuvidas.addEventListener("click", () => {
  menuTransition.classList.remove("menu-mobile--active");
});

menuCloseLogin.addEventListener("click", () => {
  menuTransition.classList.remove("menu-mobile--active");
});
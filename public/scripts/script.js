const openBtn = document.querySelector("#hamburger");
const closeBtn = document.querySelector("#close");
const sideNav = document.querySelector("#sideNav");
const sideNavChild = document.querySelector("#sideNav > div");
const bg = document.querySelector("#bgDrop");

// console.log(sideNavChild.innerHTML);
openBtn.addEventListener("click", () => {
	sideNav.classList.toggle("active");
	bg.classList.toggle("active")
});

closeBtn.addEventListener("click", () => {
	sideNav.classList.toggle("active");
	bg.classList.toggle("active")
});

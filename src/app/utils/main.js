const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");
tabItem.forEach((elem) => {
	elem.addEventListener("click", open);
});

function open(event) {
	const tabTrget = event.currentTarget;
	const button = tabTrget.dataset.button;
	tabItem.forEach((item) => {
		item.classList.remove("tabs__btn-item--active");
	});
	tabTrget.classList.add("tabs__btn-item--active");
	tabContent.forEach((item) =>
		item.classList.remove("tabs__content-item--active")
	);
	document
		.querySelector(`#${button}`)
		.classList.add("tabs__content-item--active");
}
const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");
menuBtn.addEventListener("click", () => {
	menu.classList.toggle("menu__list--active");
});
const swiper = new Swiper(".swiper", {
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});

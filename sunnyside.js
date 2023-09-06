
const dropDown = document.querySelector(".hidden");

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener('click', DropDownMenu = () => {
	//toggle removes the class when it already exist and add it when it does not exist
	dropDown.classList.toggle('hidden');
});


const open = document.getElementById('burger');
const menu = document.getElementById('menu');

open.addEventListener('click', () => {
	menu.style.display = 'flex';
	event.stopPropagation();
	console.log('click');
});

document.addEventListener('click', () => {
	if (!menu.contains(event.target)) {
		menu.style.display = 'none';
		console.log('click');
	}
});
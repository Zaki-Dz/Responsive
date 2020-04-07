let menuBtn = document.querySelector('.nav-btn');
let menu = document.querySelector('nav');
let ind = false;

menuBtn.addEventListener('click', function(){

	if (!ind) {

		menuBtn.innerHTML = 'X';
		menu.style.left = 0;
		menuBtn.style.transform = 'rotate(0)';
		ind = true;

	} else {

		menuBtn.innerHTML = '|||';
		menu.style.left = 100 + '%';
		menuBtn.style.transform = 'rotate(-90deg)';
		ind = false;

	}

});

let toTop = document.querySelector('#to-top');

window.addEventListener('scroll', function(){

	if (window.pageYOffset > window.innerHeight/2) {

		toTop.style.display = 'block';

	} else {

		toTop.style.display = 'none';

	}

});

toTop.addEventListener('click', function(){

	window.scrollTo(0, 0);

});

let navButtons = document.querySelectorAll('nav ul li a');

for (let i = 0; i < navButtons.length; i++) {
	
	navButtons[i].addEventListener('click', function(){

		let el = '#' + navButtons[i].getAttribute('data-scroll');

		let top = document.querySelector(el);

		window.scrollTo(0, top.offsetTop);

	});
	
}

let tabButtons = document.querySelectorAll('.info-list li');
let tabInfo = document.querySelectorAll('.info-content div');

for (var i = 0; i < tabButtons.length; i++) {

	tabButtons[i].addEventListener('click', function(){

		let el = this.parentElement.children;
		let name = this.getAttribute('data-name');

		for (var i = 0; i < el.length; i++) {

			el[i].classList.remove('active');

		}

		this.classList.add('active');

		for (var i = 0; i < tabInfo.length; i++) {
			
			let info = tabInfo[i];

			if (info.className == name) {

				info.style.display = 'block';

			} else {

				info.style.display = 'none';

			}

		}

	});

}
let toTop = document.querySelector('.to-top');

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
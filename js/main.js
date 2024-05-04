let collapse = document.querySelectorAll('.collapse')
collapse.forEach(item => {
	item.addEventListener('click', () => {
		item.querySelector('.wrapper').classList.toggle('open')
		item.querySelector('.collapse__content svg').classList.toggle('rotate')
		// wrapper.classList.toggle("open")
		// img.classList.toggle("rotate")
	})
})



function footerFunction() {
	let x = document.getElementById('footer__f')
	let img = document.getElementById('footer__img')
	if (x.style.display === 'none') {
		x.style.display = 'flex'
    	img.style.transform = 'rotate(180deg)'
	} else {
		x.style.display = 'none'
    	img.style.transform = 'rotate(0deg)'
	}
}

footerFunction()


$('.single-item').slick({
	prevArrow: "<img src='../img/sliderLeft.svg' class='prev' alt='1'>",
	nextArrow: "<img src='../img/sliderRight.svg' class='next' alt='2'>",
})
$('.single-item2').slick({
	arrows: false,
	infinite: true,
	slidesToShow: 4,
	asNavFor: '.single-itemBig2',
	focusOnSelect: true,
})

$('.single-itemBig2').slick({
	arrows: false,
	vertical: false,
	fade: true,
	asNavFor: '.single-item2',
})

$('.single-team').slick({
	prevArrow: "<img src='../img/sliderLeft-team.svg' class='prev' alt='1'>",
	nextArrow: "<img src='../img/sliderRight-team.svg' class='next' alt='2'>",
	variableWidth: true,
})

const burger = document.getElementById('burger__menu')
const burgerMenu = document.getElementById('burger')
const burgerNone = document.getElementById('burgerNone')
const headerInner = document.getElementById('header__inner')
const headerInfo = document.getElementById('header__info')

// Функция для переключения класса
function toggleClass() {
	burger.classList.toggle('burgerBlock')
	headerInner.style.display = 'none';
	headerInfo.style.paddingTop = '183px';
}

function burgerNoneFunc() {
	burger.classList.remove('burgerBlock')
	headerInner.style.display = 'flex'
	headerInfo.style.paddingTop = '0px'
}

// Добавляем обработчик события 'click' на меню бургера
burgerMenu.addEventListener('click', toggleClass)
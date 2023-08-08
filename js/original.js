const arrImg = [
	{ img: 'images/big1.jpg' },
	{ img: 'images/big2.jpg' },
	{ img: 'images/big3.jpg' },
	{ img: 'images/big4.jpg' },
	{ img: 'images/big5.jpg' },
	{ img: 'images/big6.jpg' },
	{ img: 'images/big7.jpg' },
	{ img: 'images/big8.jpg' },
];

const $a = $('header>ul>li>a');
const $img = $('header>ul>li>a>img');
const $imgSec = $('section> img');

$a.each(function () {
	$a.on('click', function (evt) {
		evt.preventDefault();
		const changeImg = $img.attr('src');
		$imgSec.attr('src', changeImg);
	});
});

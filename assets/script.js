const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');



arrowLeft.addEventListener('click', () => {
	console.log('Clic sur la flèche gauche');
  }); 
arrowRight.addEventListener('click', () => {
	console.log('Clic sur la flèche droite');
  });

  

slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
    });
    dotsContainer.appendChild(dot);
    if (index === 0) {
        dot.classList.add('dot_selected');
    }
});



let currentSlideIndex = 0;

function updateSlide(index) {    
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    tagLine.innerHTML = slides[index].tagLine;
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });

    currentSlideIndex = index;
}

arrowRight.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        updateSlide(currentSlideIndex + 1);
    } 
});
arrowLeft.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        updateSlide(currentSlideIndex - 1);
    } 
});
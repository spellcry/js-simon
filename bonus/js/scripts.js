const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const firstIndex = 0;

let firstSlide, lastSlide, firstDot, lastDot;

// prendo elemento 'dots'
const dotsEl = document.querySelector('.dots');
dotsEl.innerHTML = '';
console.log(dotsEl);

// prendo elemento 'slides-wrapper'
const slidesWrapperEl = document.querySelector('.slides-wrapper');
slidesWrapperEl.innerHTML = '';

for ( let i = 0; i < slides.length; i++ ) {
    const src = slides[i];
    
    // creando li
    const liEl = document.createElement('li');
    liEl.className = 'slide';

    // creando img
    const imgEl = document.createElement('img');
    imgEl.src = src;

    // inseriamo img dentro li
    liEl.append(imgEl);

    // inseriamo li dentro la lista 'slidesWrapperEl'
    slidesWrapperEl.append(liEl);
    
    // creo dot
    const dotEl = document.createElement('div');
    dotEl.className = 'dot';
    dotEl.classList.add(`dot${i+1}`);

    // aggiungo la classe active al dot e alla slide desiderata
    if ( i === firstIndex ) {
        liEl.classList.add('active');
        dotEl.classList.add('active');
    }

    // salvo primo li e dot
    if ( i === 0 ) {
        firstSlide = liEl;
        firstDot = dotEl;
    }

    // salvo ultimo li e dot
    if ( i === slides.length - 1 ) {
        lastSlide = liEl;
        lastDot = dotEl;
    }

    // metto dot dentro a dots
    dotsEl.append(dotEl);

}

const nextArrowEl = document.querySelector('.arrow-next');

nextArrowEl.addEventListener('click', function() {
    const activeEl = document.querySelector('.slide.active');
    activeEl.classList.remove('active');
    const activeDotEl = dotsEl.querySelector('.active');
    activeDotEl.classList.remove('active');
    if ( activeEl.nextElementSibling != null ) { // se c'è un elemento successivo lo visualizzo
        // slide
        const nextLiEl = activeEl.nextElementSibling;
        nextLiEl.classList.add('active');
        // dot
        const nextDotEl = activeDotEl.nextElementSibling;
        nextDotEl.classList.add('active');
    } else { // altrimenti visualizzo il primo
        // slide
        firstSlide.classList.add('active');
        //dot
        firstDot.classList.add('active');
    }
});

const prevArrowEl = document.querySelector('.arrow-prev');

prevArrowEl.addEventListener('click', function() {
    const activeEl = document.querySelector('.slide.active');
    activeEl.classList.remove('active');
    const activeDotEl = dotsEl.querySelector('.active');
    activeDotEl.classList.remove('active');
    if ( activeEl.previousElementSibling != null ) { // se c'è un elemento precedente lo visualizzo
        // slide
        const prevLiEl = activeEl.previousElementSibling;
        prevLiEl.classList.add('active');
        // dot
        const prevDotEl = activeDotEl.previousElementSibling;
        prevDotEl.classList.add('active');
    } else { // altrimenti visualizzo l'ultimo
        //slide
        lastSlide.classList.add('active');
        //dot
        lastDot.classList.add('active');
    }
});

dotsEl.addEventListener('click', function(){
    let dotEl = dotsEl.querySelector(':hover');
    if ( dotEl != null ) {
        let index = 0;
        // trovo l'index dell'elemento
        while( (dotEl = dotEl.previousSibling) != null ) {
            index++;
        }
        // prendo la slide corrente e la prossima da visualizzare
        const activeSlideEl = document.querySelector('.active');
        const nextActiveSlideEl = slidesWrapperEl.childNodes[index];
        
        activeSlideEl.classList.remove('active');
        nextActiveSlideEl.classList.add('active');
    
        // prendo il dot corrente e il prossimo attivo
        const activeDotEl = dotsEl.querySelector('.active');
        const nextActiveDotEl = dotsEl.childNodes[index];
    
        activeDotEl.classList.remove('active');
        nextActiveDotEl.classList.add('active');
    }
});
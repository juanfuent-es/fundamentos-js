import gsap from 'gsap';

class Preloader {
    constructor(args= {}) {
        this.backgroundColor = args.backgroundColor;
        this.preloader = document.getElementById('preloader');
    }
}

gsap.to('#preloader', {
    delay: 1,
    duration: 2,
    ease: 'power2.inOut',
    opacity: 0,
    y: '100%',
    backgroundColor: 'red'
})

/* 
const preloader = document.getElementById('preloader');
// Este es un ejemplo de como se puede usar el setTimeout para cargar un preloader
setTimeout(() => {
    preloader.classList.add('loaded');
}, 2000); // 2 segundos 
// */
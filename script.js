
let typed = new Typed(".auto-type",{
    strings: ["JUNIOR FRONT-END DEVELOPER"],
    typeSpeed:100,
    backSpeed:100,
    loop: false
})

AOS.init();


const nav = document.querySelector('nav');

window.addEventListener('scroll',() => {
    if(window.pageYOffset > 70){
        nav.classList.add('navbar-scrolled');  
    }else{
        nav.classList.remove('navbar-scrolled');
    }
});


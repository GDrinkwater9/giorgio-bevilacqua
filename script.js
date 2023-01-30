
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

const menu = document.querySelector('.navbar-collapse')

window.addEventListener('click',(e) => {
    console.log(e.path.includes(nav));
    if(!e.path.includes(nav)){
        menu.classList.remove('show');
    }
} )




function fetchDown (url, saveas) {
    fetch(url)
   
    .then((result) => {
      if (result.status != 200) { throw new Error("Bad server response"); }
      return result.blob();
    })
   

    .then((data) => {

      console.log(data);
   

      var url = window.URL.createObjectURL(data),
      anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = saveas;
      anchor.click();
   

      window.URL.revokeObjectURL(url);
      document.removeChild(anchor);
    })

    .catch((error) => { console.log(error); })
}
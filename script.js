
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


function DownloadFile(cv) {

    var url = "CV_GIORGIO_BEVILACQUA1.pdf" + cv;

   
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {

        var blob = new Blob([req.response], { type: "application/octetstream" });

        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob,cv);
        } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.getElementById("cv");
            a.setAttribute("download", cv);
            a.setAttribute("href", link);
         
            a.click();
    
        }
    };
    req.send();
};
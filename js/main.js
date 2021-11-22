// btn-toggle
let toggler = document.querySelector(".btn-toggle");


toggler.onclick = function () {
    let nav = document.querySelector(".navbar");
    let display = window.getComputedStyle(nav).getPropertyValue('display');
    if ( display === "none" ) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }  
}
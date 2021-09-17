$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: false,
        autoplayTimeout: 2000,
        loop: true,
        nav:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
            },
            769:{
                items:3,
            }
        }
    });
});
const config = {
    type: "carousel",
    perView: 3,
    breakpoints:{
        768:{
            perView:1,
        }
    }
     
}
new Glide('.glide',config).mount({
     
});

let btn = document.getElementById("menu-icon");
let middle = document.getElementById("mobile-menu");
let close = document.querySelector(".close");
let over = document.querySelector(".overlay")

btn.addEventListener("click", (event) =>{
    middle.classList.toggle("active");
    close.classList.toggle("active");
    over.classList.add("active");

})
close.addEventListener("click", () =>{
    middle.classList.toggle("active");
    close.classList.toggle("active");
    over.classList.toggle("active")
})
over.addEventListener("click", ()=>{
    middle.classList.toggle("active");
    over.classList.toggle("active");
    close.classList.toggle("active");
})
middle.addEventListener("click", (event) =>{
    middle.classList.toggle("active");
    close.classList.toggle("active");
    over.classList.toggle("active")
})

$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});
$(".menus:first-child").addClass("active")
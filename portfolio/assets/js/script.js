let span =document.getElementById("scrollBtn");

window.onscroll = function (){
    console.log(scrollY)
    scrollY >= 80 ? span.classList.add("show") : span.classList.remove("show");
}


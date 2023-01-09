var navbar = document.getElementById('nav');
window.onscroll = function(){
    if(window.scrollY > 50){
navbar.classList.add("nav-active");
    }
    else{
        navbar.classList.remove("nav-active");
    }
}



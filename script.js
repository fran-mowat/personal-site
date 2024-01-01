let scrollToTop = () => {
    document.body.scrollTop = 0; //safari
    document.documentElement.scollTop = 0; //chrome, firefox, ie, opera 
    window.scrollTo(0,0);
}

let checkScroll = () => {
    let scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

window.onscroll = function() {checkScroll()};
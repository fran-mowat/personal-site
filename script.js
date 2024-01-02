let scrollToTop = () => {
    document.body.scrollTop = 0; //safari
    document.documentElement.scollTop = 0; //chrome, firefox, ie, opera 
    window.scrollTo(0,0);
}

let checkScroll = () => {
    let scrollButton = document.getElementById("scroll-to-top");
    let navBar = document.getElementById("menu");

    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450){
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navBar.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
    } else {
        navBar.style.backgroundColor = "rgb(0, 0, 0, 0)";
    }
}

let copyEmail = () => {
    navigator.clipboard.writeText("franmowat33@gmail.com");
}

window.onscroll = function() {checkScroll()};

VANTA.GLOBE({
    el: "#home",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xd1d1d1,
    color2: 0xc8b8ff,
    backgroundColor: 0x50535
  })
  
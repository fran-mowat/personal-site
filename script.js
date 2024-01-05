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
        navBar.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
        for (let i = 1; i < navBar.children.length; i++){ //start from 1 to avoid logo div
            navBar.children[i].firstChild.firstChild.classList = "offset";
        }
    } else {
        navBar.style.backgroundColor = "rgb(0, 0, 0, 0)";
        for (let i = 1; i < navBar.children.length; i++){
            navBar.children[i].firstChild.firstChild.classList = "top";
        }
    }
}

let copyEmail = () => {
    let snackbar = document.getElementById("snackbar")
    navigator.clipboard.writeText("franmowat33@gmail.com");
    snackbar.className = "show";
    setTimeout(function(){snackbar.className = snackbar.className.replace("show", ""); }, 3000)
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
    color2: 0x35A3E7,
    backgroundColor: 0x50535
  })

let blueChange = () => {
    let arrow = document.getElementById("scroll-one").children[0];
    let scrollText = document.getElementById("scroll-two").children[0];
    
    arrow.style.color = "#2A80C0";
    scrollText.style.color = "#2A80C0";
}

let whiteChange = () => {
    let arrow = document.getElementById("scroll-one").children[0];
    let scrollText = document.getElementById("scroll-two").children[0];
    
    arrow.style.color = "#FFFFFF";
    scrollText.style.color = "#FFFFFF";
}

let scrollDiv = document.getElementById("scroll")
scrollDiv.addEventListener("mouseenter", blueChange)
scrollDiv.addEventListener("mouseleave", whiteChange)

let setGrey = () => {
    document.getElementById("email-address").style.opacity = 0.7;
}

let setWhite = () => {
    document.getElementById("email-address").style.opacity = 1;
}

let emailHover = document.getElementById("email");
emailHover.addEventListener("mouseenter", setGrey)
emailHover.addEventListener("mouseleave", setWhite)

scrollCue.init();

let changeButton = () => {
    resume.style.backgroundPosition = "left";
    resume.children[0].style.color = "#2A80C0";
}

let revertButton = () => {
    resume.style.backgroundPosition = "right";
    resume.children[0].style.color = "white";
}

let resume = document.getElementById("resume-button");
resume.addEventListener("mouseenter", changeButton);
resume.addEventListener("mouseleave", revertButton);



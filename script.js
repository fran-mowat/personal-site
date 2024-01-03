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
        for (let i = 0; i < navBar.children.length; i++){
            navBar.children[i].style.color = "black";
        }
    } else {
        navBar.style.backgroundColor = "rgb(0, 0, 0, 0)";
        for (let i = 0; i < navBar.children.length; i++){
            navBar.children[i].style.color = "white";
        }
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
    color2: 0x35A3E7,
    backgroundColor: 0x50535
  })

let nudge = (e) => {
    e.target.style.boxShadow = "5px 5px 5px #5B5B5B";
    e.target.style.transform = "translate(0, -2px)";
}

let reset = (e) => {
    e.target.style.boxShadow = "none";
    e.target.style.transform = "translate(0, 2px)";
}

let projectTiles = document.getElementsByClassName("project-tile");

for (let i = 0; i < projectTiles.length; i++){
    projectTiles[i].addEventListener("mouseenter", nudge);
    projectTiles[i].addEventListener("mouseleave", reset);
}

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




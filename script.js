import { Octokit } from "https://esm.sh/@octokit/core";
 
const scrollToTop = () => {
    document.body.scrollTop = 0; //safari
    document.documentElement.scollTop = 0; //chrome, firefox, ie, opera 
    window.scrollTo(0,0);
};

const scrollToTopButton = document.getElementById("scroll-to-top");
scrollToTopButton.addEventListener("click", scrollToTop);

const checkPagePosition = () => {
    const menu = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const dropdownButton = document.getElementById("dropdown-button");

    if ((document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) && document.documentElement.clientWidth >= 768){
        scrollToTopButton.classList.add("display");
    } else {
        scrollToTopButton.classList.remove("display");
    }

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        menu.classList.add("display");
    } else {
        menu.classList.remove("display");
    }

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        mobileMenu.style.backgroundColor = "#ffffffe6";
        dropdownButton.classList.add("dropdown-button-click");
    } else if (document.body.getAttribute("listener") == false || document.body.getAttribute("listener") == null){ //menu is not already clicked open
        mobileMenu.style.backgroundColor = "none";
        dropdownButton.classList.remove("dropdown-button-click");
    }
};

window.addEventListener("scroll", checkPagePosition);

const copyEmail = () => {
    const snackbar = document.getElementById("snackbar");
    navigator.clipboard.writeText("franmowat33@gmail.com");
    snackbar.classList.add("show");
    setTimeout(() => snackbar.classList.remove("show"), 3000);
};

const copyEmailButton = document.getElementById("email");
copyEmailButton.addEventListener("click", copyEmail);

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
});

scrollCue.init();

const removeMenu = () => {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = "none";

    const mobileMenu = document.getElementById("mobile-menu");

    document.body.removeEventListener("click", removeMenu);
    document.body.setAttribute("listener", false);

    dropdownButton.addEventListener("click", menuDisplay);

    if (! (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)){
        dropdownButton.classList.remove("dropdown-button-click");
        mobileMenu.style.backgroundColor = "";
    }
};

const menuDisplay = (e) => {
    e.stopPropagation();

    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = "block";

    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.backgroundColor = "rgba(255, 255, 255, 0.9)";

    dropdownButton.classList.add("dropdown-button-click");
    dropdownButton.removeEventListener("click", menuDisplay);
    
    document.body.addEventListener("click", removeMenu);
    document.body.setAttribute("listener", true);
};

const dropdownButton = document.getElementById("dropdown-button");
dropdownButton.addEventListener("click", menuDisplay);

const getRepoLanguages = async (repositoryName) => {
    const projectTile = document.getElementById(repositoryName);

    try {
        const response = await octokit.request(`GET /repos/fran-mowat/${repositoryName}/languages`);
        const data = response.data; 

        const languages = Object.keys(data);

        let totalBytes = 0; 
        Object.values(data).forEach((bytes) => {
            totalBytes += bytes; 
        });
        
        const languageTitle = document.createElement("p");
        languageTitle.classList.add("language-title");
        languageTitle.innerHTML = "Languages: ";

        projectTile.appendChild(languageTitle);

        languages.forEach((language) => {
            let languageBytes = data[language]; 
            let languagePercentage = ((languageBytes / totalBytes) * 100).toFixed(1);

            let span = document.createElement("span");
            span.classList.add("language");
            span.innerHTML = `${language}: ${languagePercentage}%`;

            projectTile.appendChild(span);
        }); 
    } catch (ex) {
        console.log(`Exception occurred when accessing ${repositoryName} repository languages: ${ex}`);
    }
};

const octokit = new Octokit();
const projectsTiles = document.querySelectorAll('.project-tile');
projectsTiles.forEach(projectTile => {
    getRepoLanguages(projectTile.id);
});


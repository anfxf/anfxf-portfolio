// Nav Bar
const NavBar = document.querySelector('.navbar');
const NavToggler = document.querySelector('.navToggle');
const NavTogglerImg = document.querySelector('#navTogglerImg');

NavToggler.onclick = function (event) {
    // prevent Refresh
    event.preventDefault();
    if (NavBar.style.display == 'none') {
        NavBar.style.display = 'flex';
        NavTogglerImg.src = "/public/images/Icons/Close.png";
    } else {
        NavBar.style.display = 'none'
        NavTogglerImg.src = "/public/images/Icons/Menu.png";
    }
}




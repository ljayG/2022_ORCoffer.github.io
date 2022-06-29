// GNB Fixed
const TopMenuPosition = Wrapper.offsetTop;
function submenuBarFixed(){
    if ( window.pageYOffset > TopMenuPosition ) {
        Wrapper.classList.add('fx');
    } else {
        Wrapper.classList.remove('fx');
    }
}
submenuBarFixed();
document.addEventListener('scroll',submenuBarFixed);


// mobile Navigation
const Body = document.querySelector('body');
const NavMenuBtn = document.querySelector('.btn-menu');
const NavMenu = document.querySelectorAll('.btn-nav-position');
const NavActive = document.querySelector('#menu');
const NavMenuClose = document.querySelector('.btn-menuclose');

for(var i = 0; i<NavMenu.length; i++) {
    NavMenu[i].addEventListener('click', function(e){
        e.preventDefault();

        if(!Wrapper.classList.contains('nav-active')) {
            Body.classList.add('menu-open');
            Wrapper.classList.add('nav-active');
            NavMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            Body.classList.remove('menu-open');
            Wrapper.classList.remove('nav-active');
            NavMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

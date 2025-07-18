function imgslide(slider){
    document.querySelector('.icecream').src = slider;
}

function changebgcolor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

function menutoggle(){
    const togglemenu = document.querySelector('.togglemenu');
    const navigation = document.querySelector('.navigation');
    togglemenu.classList.toggle('active')
    navigation.classList.toggle('active')
}
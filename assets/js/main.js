const mobileMobile = document.getElementById('mobile_menu');
const mobileSlide = document.getElementById('mobile_slide');
const closeMenuMobile = document.getElementById('close_menu_mobile');
mobileMobile.addEventListener('click' , function(){
        mobileSlide.style.visibility  = ' visible'
})

closeMenuMobile.addEventListener('click' , function(){
        mobileSlide.style.visibility = 'hidden'
})
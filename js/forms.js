function menuShow(){
    let menuMobile = document.querySelector('.mobile_menu')
    let btn_menu_mobile = document.querySelector('.btn_menu_mobile')
    if(menuMobile.classList.contains('open')){
       menuMobile.classList.remove('open')
       btn_menu_mobile.innerHTML = ''
       btn_menu_mobile.innerHTML = '<i class="fa-solid fa-bars">'
    }else{
      menuMobile.classList.add('open')
      btn_menu_mobile.innerHTML = ''
      btn_menu_mobile.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
}
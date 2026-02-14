let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let stars = document.getElementById('stars');
let nouvil = document.querySelector('#nouvil');
let main =document.querySelector('.main');
window.onscroll = function(){
  let value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value*2 + 'px';
  boat6.style.left = value*2 + 'px'
  mountains3.style.top = value + 'px';
  mountains4.style.top = value + 'px';
  river5.style.top = value*0.3 + 'px';
  
  if(scrollY >= 40) {
    nouvil.style.fontSize = value*0.1 + 'px';
    nouvil.style.position = 'fixed';
    if(scrollY>=415){
      nouvil.style.display = 'none';
    }
    else{
      nouvil.style.display = 'block';

    }
  }

  if(scrollY >=220){
    main.style.background = 'linear-gradient(to top,rgba(157, 201, 230, 1),rgba(19, 113, 235, 1))'
    stars.style.display = 'none';
  }else{
    main.style.background =  'linear-gradient(to top, rgba(26, 0, 83, 1),rgba(3, 0, 36, 1))'
    stars.style.display = 'block';
  }
}
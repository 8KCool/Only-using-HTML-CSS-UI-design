function toggleMobileMenu(menu) {
    var menu = document.querySelector('#hamburger-icon');
    var menu1 = document.querySelector('#hamburger-icon1');
    menu.classList.toggle('open');
    menu1.classList.toggle('open');
}
  
function toggleMobileMenu1(menu) {
    menu.classList.toggle('open');
}
  
  const header = document.querySelector(".page-header");
  const toggleClass = "is-sticky";
  
  window.addEventListener("scroll", () => {
    var windowHeight = window.innerHeight;
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150 + windowHeight) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
});


// slider

var imgList = document.getElementById('imgList');

function scrollRight(i) {
  imgList.scrollTo(i * 300, 0);
  
  var conponent = document.querySelector('.carousel-dot');
  conponent.classList.remove('white');
  conponent.classList.add('black');
}




var slides = document.querySelectorAll(".slide-mobile");
var dots = document.querySelectorAll(".dot-mobile");
var index = 0;


function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){
    
  if(index>slides.length-1)
    index=0;
  
  if(index<0)
    index=slides.length-1;
  
  
  
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      
      dots[i].classList.remove("active");
      
      
    }
    
    slides[index].style.display = "block";
    dots[index].classList.add("active");

  

}



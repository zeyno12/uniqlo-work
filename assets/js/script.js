var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  AOS.init();
  const burger=document.querySelector(".burger");
  if(burger){
    burger.addEventListener("click", function () {
        const navlist = document.querySelector(".listsnav");
        if (navlist.style.transform == "translateX(-500px)") {
            navlist.style.transform = "translateX(0px)";
        }
        else  {
            navlist.style.transform = "translateX(-500px)";
        }
      })
  };
  function zeynuw(){
    const url = "http://127.0.0.1:5500/second.html"
    window.open(url);
};
var plus =document.querySelector("#increment");
var deyer =document.querySelector("#value");
var minus =document.querySelector("#decirement");
var sum=0
plus.addEventListener("click",(e)=>{
  e.preventDefault();
  sum+=1;
  deyer.innerHTML=sum
});
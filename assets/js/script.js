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
var minus =document.querySelector("#decirement");
var deyer =document.querySelector("#value");
increment.addEventListener("click", incrementdeyer);
decirement.addEventListener("click", decirementdeyer);
var sum=0;
function incrementdeyer(e){
   e.preventDefault();
   sum++;
   deyer.innerText = sum;
}

function decirementdeyer (e){
  e.preventDefault();
  if(sum>0){
    sum--;
    deyer.innerText=sum;
    
  }else{
    deyer.innerText=0;
  }
}
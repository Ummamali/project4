// the following script is for global 

document.addEventListener("DOMContentLoaded", function (){
  let toggled = false;
  document.getElementById("toggler").onclick = function (){
    let res_nav = document.getElementById("res-nav");
    if (toggled == false){
      this.innerHTML = "<i class='fas fa-times'></i>";
      this.style.transform = "rotate(360deg)";
      res_nav.style.transform = "translateX(-100vw)";
      res_nav.style.opacity = "1";
      toggled = true;
    }else{
      this.innerHTML = "<i class='fas fa-bars'></i>";
      this.style.transform = "rotate(-360deg)";
      res_nav.style.transform = "translateX(0vw)";
      res_nav.style.opacity = "0"
      toggled = false;
    }
    
  };
});
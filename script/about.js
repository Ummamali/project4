// This javascript file contains comments as follows


// hover effect for master eux section in the about.html page
document.addEventListener("DOMContentLoaded", function(){
    // The below code is for eux section hover effect 
  let current = document.getElementById("main-card");
  current.style.zIndex = "1";
  current.style.opacity = "1";
  document.getElementById("documentation").onmouseover = function (){
      current.style.opacity = "0";
      current.style.zIndex = "0";
      current = document.getElementById("exp-documentation");
      current.style.opacity = "1";
      current.style.zIndex = "1"
  };

  document.getElementById("innovation").onmouseover = function (){
      current.style.opacity = "0";
      current.style.zIndex = "0";
      current = document.getElementById("exp-innovation");
      current.style.opacity = "1";
      current.style.zIndex = "1"
  };

  document.getElementById("code").onmouseover = function (){
      current.style.opacity = "0";
      current.style.zIndex = "0";
      current = document.getElementById("exp-code");
      current.style.opacity = "1";
      current.style.zIndex = "1"
  };

  document.getElementById("responsive").onmouseover = function (){
      current.style.opacity = "0";
      current.style.zIndex = "0";
      current = document.getElementById("exp-responsive");
      current.style.opacity = "1";
      current.style.zIndex = "1"
  };

    //   The code below is for the testimonials section
  document.getElementById("markus").onmouseover = function (){
    make_big();
    this.style.transform = "scale(1.5)";
    this.style.zIndex = "1";
  };
  document.getElementById("baby").onmouseover = function (){
    make_big();
    this.style.transform = "scale(1.5)";
    this.style.zIndex = "1";
  };
  document.getElementById("joseph").onmouseover = function (){
    make_big();
    this.style.transform = "scale(1.5)";
    this.style.zIndex = "1";
  };
  document.getElementById("ken").onmouseover = function (){
    make_big();
    this.style.transform = "scale(1.5)";
    this.style.zIndex = "1";
  };


//   resets on mouse leave
  document.getElementById("markus").onmouseleave = reset;
  document.getElementById("baby").onmouseleave = reset;
  document.getElementById("joseph").onmouseleave = reset;
  document.getElementById("ken").onmouseleave = reset;  
});


function reset(){
    this.style.transform = "scale(1)";
    this .style.zIndex = "0";
}

function make_big (){
    document.querySelector(".people").style.height = "300px";
}
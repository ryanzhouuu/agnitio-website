window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "100px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}
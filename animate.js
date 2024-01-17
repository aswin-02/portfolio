function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



document.addEventListener('DOMContentLoaded', function() {
  var fadeElement = document.querySelector('.fade-in-text');

  function fadeInOnScroll() {
    var scrollPosition = window.scrollY;
    var elementPosition = fadeElement.offsetTop;

    if (scrollPosition > elementPosition - window.innerHeight / 2) {
      fadeElement.classList.add('fade-in');
    }
  }

  window.addEventListener('scroll', fadeInOnScroll);
});
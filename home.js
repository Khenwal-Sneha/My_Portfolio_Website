
// Javascript for image animation
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.scroll-animate');
  
    function checkIfInView() {
      const triggerBottom = window.innerHeight / 1.2; // Adjust this value to change when the animation triggers
  
      images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;
  
        if (imageTop < triggerBottom) {
          image.classList.add('in-view');
        } else {
          image.classList.remove('in-view');
        }
      });
    }
  
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Initial check in case any images are already in view
  });
  
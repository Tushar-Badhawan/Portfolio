// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});

// Reveal Animation on Both Upward and Downward Scroll
const containers = document.querySelectorAll('.container');

const revealContainers = () => {
  const windowHeight = window.innerHeight;
  
  containers.forEach(container => {
    const { top, bottom } = container.getBoundingClientRect();

    // Check if the container is in the viewport
    const isVisible = top < windowHeight - 100 && bottom > 100;

    container.classList.toggle('active', isVisible);
  });
};

// Throttle function to improve performance during scroll
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

window.addEventListener('scroll', throttle(revealContainers, 100));
revealContainers(); // Run once on page load

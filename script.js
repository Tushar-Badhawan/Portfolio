// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Reveal Animation on Scroll
const containers = document.querySelectorAll('.container');

const revealContainers = () => {
  const windowHeight = window.innerHeight;

  containers.forEach(container => {
    const { top, bottom } = container.getBoundingClientRect();
    const isVisible = top < windowHeight - 100 && bottom > 100;

    container.classList.toggle('active', isVisible);
  });
};

// Throttle function
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

// Navbar hide on scroll down, show on scroll up
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    nav.style.top = "-80px"; // hide
  } else {
    nav.style.top = "0"; // show
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

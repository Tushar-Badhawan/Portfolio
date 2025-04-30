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

// Initialize particles.js background for landing section
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      out_mode: "bounce",
    }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } }
  },
  retina_detect: true,
});

// Typewriter effect for intro text
const introElement = document.querySelector('.intro-text');
const fullText = `A passionate Computer Science engineer focused on learning, gaining skills, and developing solutions, driven by curiosity and the joy of learning new technology. Here's more about me. ↓`;

let index = 0;

function typeWriter() {
  if (index < fullText.length) {
    introElement.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  }
}

// Clear existing content and start typing effect
introElement.textContent = '';
typeWriter();

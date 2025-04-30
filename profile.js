
let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-70px"; // adjust based on your navbar height
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});


document.addEventListener("DOMContentLoaded", () => {
  const qaItems = document.querySelectorAll(".qa-item");
  const videos = document.querySelectorAll(".video-wrapper iframe");

  qaItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Remove active states
      qaItems.forEach(el => el.classList.remove("active"));
      videos.forEach(vid => vid.classList.remove("active"));

      // Activate selected
      item.classList.add("active");
      if (videos[index]) {
        videos[index].classList.add("active");
      }
    });
  });

  // Activate first video by default
  if (qaItems.length > 0 && videos.length > 0) {
    qaItems[0].classList.add("active");
    videos[0].classList.add("active");
  }
});

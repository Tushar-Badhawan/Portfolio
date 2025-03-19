document.querySelectorAll('.qa-item').forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all questions
      document.querySelectorAll('.qa-item').forEach(el => el.classList.remove('active'));
      
      // Add active class to the clicked item
      item.classList.add('active');
      
      // Get the index of the clicked question
      const videoIndex = item.getAttribute('data-video');
      
      // Show the corresponding video
      document.querySelectorAll('.video-wrapper iframe').forEach((video, index) => {
        video.style.display = (index == videoIndex) ? 'block' : 'none';
      });
    });
  });
  
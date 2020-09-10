const $roomContents = document.querySelectorAll('.room_content');

window.addEventListener('scroll', () => {
  $roomContents.forEach(roomContent => {
    const rect = roomContent.getBoundingClientRect().top;
    if (rect <= window.innerHeight) {
      const img = roomContent.getElementsByClassName('room_image')[0];
      const src = img.getAttribute('lazy-load');
      img.setAttribute('src', src);
      roomContent.classList.add('fade');
    }
  });
});
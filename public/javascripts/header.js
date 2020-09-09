const $toggleMenu = document.querySelector('.toggle_menu');
const $signModal = document.querySelector('.sign_modal');

const openToggleMenu = () => {
  $toggleMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    $signModal.classList.remove('hidden');
  });
};

const closeToggleMenu = () => {
  window.addEventListener('click', () => {
    if (!$signModal.classList.contains('hidden')) {
      $signModal.classList.add('hidden');
    }
  });
};

(() => {
  openToggleMenu();
  closeToggleMenu();
})();
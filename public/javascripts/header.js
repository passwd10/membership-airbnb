const $toggleMenu = document.querySelector('.toggle_menu');
const $signModal = document.querySelector('.sign_modal');
const $checkInButton = document.querySelector('.searchContent.checkin');
const $checkOutButton = document.querySelector('.searchContent.checkout');
const $searchDateModal = document.querySelector('.search_date_calendar');

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

    if (!$searchDateModal.classList.contains('hidden')) {
      $searchDateModal.classList.add('hidden');
    }
  });
};

const stopPropagationInSearchDateModal = () => {
  $searchDateModal.addEventListener('click', (e) => {
    e.stopPropagation();
  });
};

const openSearchDateModal = () => {
  $checkInButton.addEventListener('click', (e) => {
    e.stopPropagation();
    $searchDateModal.classList.remove('hidden');
  });

  $checkOutButton.addEventListener('click', (e) => {
    e.stopPropagation();
    $searchDateModal.classList.remove('hidden');
  });
};

(() => {
  openToggleMenu();
  closeToggleMenu();
  openSearchDateModal();
  stopPropagationInSearchDateModal();
})();
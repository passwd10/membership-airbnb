const $loginModal = document.querySelector('.loginModal');
const $loginOverlay = document.querySelector('.loginModal__overlay');
const $loginBtn = document.querySelector('#login_list');
const $signupBtn = document.querySelector('#signup_list');
const $signupModal = document.querySelector('.signupModal');
const $signupOverlay = document.querySelector('.signupModal__overlay');

const stopPropagationWhenClickedModal = () => {
  $loginModal.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  $signupModal.addEventListener('click', (e) => {
    e.stopPropagation();
  });
};

const openLoginModal = () => {
  if ($loginBtn) {
    $loginBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      $loginModal.classList.remove('hidden');
    });
  }
};

const openSignupModal = () => {
  if ($signupBtn) {
    $signupBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      $signupModal.classList.remove('hidden');
    });
  }
};

const closeLoginModal = () => {
  $loginOverlay.addEventListener('click', () => {
    $loginModal.classList.add('hidden');
  });
};

const closeSignupModal = () => {
  $signupOverlay.addEventListener('click', () => {
    $signupModal.classList.add('hidden');
  });
};

(() => {
  stopPropagationWhenClickedModal();
  openLoginModal();
  openSignupModal();
  closeLoginModal();
  closeSignupModal();
})();

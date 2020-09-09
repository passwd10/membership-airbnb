const $loginModal = document.querySelector('.loginModal');
const $loginOverlay = document.querySelector('.loginModal__overlay');
const $loginBtn = document.querySelector('#login_list');
const $signupBtn = document.querySelector('#signup_list');
const $signupModal = document.querySelector('.signupModal');
const $signupOverlay = document.querySelector('.signupModal__overlay');

$loginModal.addEventListener('click', (e) => {
  e.stopPropagation();
});

$loginOverlay.addEventListener('click', () => {
  $loginModal.classList.add('hidden');
});

if ($loginBtn) {
  $loginBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    $loginModal.classList.remove('hidden');
  });
}

if ($signupBtn) {
  $signupBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    $signupModal.classList.remove('hidden');
  });
}

$signupModal.addEventListener('click', (e) => {
  e.stopPropagation();
});

$signupOverlay.addEventListener('click', () => {
  $signupModal.classList.add('hidden');
});

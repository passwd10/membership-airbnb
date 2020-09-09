const toggleMenu = document.querySelector('.toggle_menu');
const signModal = document.querySelector('.sign_modal');

toggleMenu.addEventListener('click', (event) => {
  event.stopPropagation();
  signModal.classList.remove("hidden");
})

window.addEventListener('click', (event) => {
  if (!signModal.classList.contains('hidden')) {
    signModal.classList.add("hidden");
  }
})
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  mainContent.classList.toggle('active');
});

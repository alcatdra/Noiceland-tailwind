const menuElement = document.getElementById('menu-list');
const drawerButtonElement = document.getElementById('menu-button');
const mobileDrawerElement = document.getElementById('menu-panel');
const mobileDrawerCloseElement = document.getElementById('menu-close-btn');

function toggleMobileDrawer() {
  mobileDrawerElement.classList.toggle('translate-x-full');
}

drawerButtonElement.addEventListener('click', () => {
  toggleMobileDrawer();
});

mobileDrawerCloseElement.addEventListener('click', () => {
  toggleMobileDrawer();
});

//close the drawer on click outside of it
document.addEventListener('click', (e) => {
  if (
    !mobileDrawerElement.contains(e.target) &&
    !drawerButtonElement.contains(e.target)
  ) {
    toggleMobileDrawer();
  }
});
//close the drawer when clicking on a link inside of it
document.querySelectorAll('#menu-panel a').forEach((link) => {
  link.addEventListener('click', () => {
    toggleMobileDrawer();
  });
});

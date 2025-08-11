const MenuBtn = document.getElementsByClassName("menu-btn")[0];
const MenuModal = document.getElementsByClassName("nav-modal")[0];
const Menu = document.getElementsByClassName("nav-mobile")[0];

function OpenMenu() {
    if(MenuModal.classList.contains("toggle")) {
        MenuModal.classList.remove("toggle");
        Menu.classList.remove("toggle");
    } else {
        MenuModal.classList.add("toggle");
        Menu.classList.add("toggle")
    }
}

MenuBtn.addEventListener("click", OpenMenu);
MenuModal.addEventListener("click", OpenMenu);

document.querySelectorAll('.link-menu').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });


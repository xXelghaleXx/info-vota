    // Seleccionar elementos
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');
    const body = document.body;

    // Abrir/Cerrar menú móvil
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-active'); // Evita el scroll
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-active');
        });
    });
    
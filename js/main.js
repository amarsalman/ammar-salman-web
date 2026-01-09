document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            const isActive = navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(isActive));
        });
    }

    if (navLinks && navLinks.length) {
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (navMenu) navMenu.classList.remove('active');
                if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage ||
           (currentPage === '' && linkPage === 'index.html') ||
           (currentPage === '' && linkPage === './index.html')) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('alt')) {
            img.setAttribute('alt', 'Amar Salman Official Website');
        }
    });

});

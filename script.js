document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;  
    const links = document.querySelectorAll('nav a'); 

    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPage || linkPath === currentPage.split('/').pop()) {
            link.classList.add('active');  
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Función de navegación suave
    document.querySelectorAll('.navbar-profile button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.querySelector('a').getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
})




document.addEventListener('DOMContentLoaded', function() {
    // Función de navegación suave
    document.querySelectorAll('.navbar-profile button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.querySelector('a').getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 20, // Ajuste para un pequeño espacio superior
                behavior: 'smooth'
            });
        });
    });

    // Ajuste automático de los cuadros de los proyectos
    function ajustarProyectos() {
        const proyectos = document.querySelectorAll('.card-projects');
        proyectos.forEach(proyecto => {
            proyecto.style.height = 'auto'; // Ajustar la altura automáticamente
        });
    }

    // Llamar a la función para ajustar proyectos
    ajustarProyectos();
});


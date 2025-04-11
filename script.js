document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-izquierda a'); // Ajusta el selector si es necesario
    const sections = document.querySelectorAll('home, sobremi, educacion,skills, proyectos, contacto '); // Selecciona tus secciones (y footer si aplica)
  
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function activateMenuItem() {
      sections.forEach(section => {
        if (isElementInViewport(section)) {
          const sectionId = section.getAttribute('id');
          menuLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
              // Elimina la clase 'active' de todos los links
              menuLinks.forEach(l => l.classList.remove('active'));
              // Agrega la clase 'active' al link correspondiente
              link.classList.add('active');
            }
          });
        }
      });
    }
  
    // Activa el primer elemento al cargar la página si la primera sección está visible
    activateMenuItem();
  
    // Escucha el evento scroll para actualizar la activación del menú
    window.addEventListener('scroll', activateMenuItem);
  });
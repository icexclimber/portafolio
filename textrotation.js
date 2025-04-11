document.addEventListener('DOMContentLoaded', function() {
    const frases = document.querySelectorAll('.frase');
    let indiceActual = 0;
    const tiempoDeRotacion = 3000; // Milisegundos (3 segundos)
  
    function rotarFrases() {
      // Oculta la frase actual
      frases[indiceActual].classList.remove('activa');
  
      // Calcula el nuevo índice
      indiceActual = (indiceActual + 1) % frases.length;
  
      // Muestra la nueva frase
      frases[indiceActual].classList.add('activa');
    }
  
    // Inicia la rotación automática
    setInterval(rotarFrases, tiempoDeRotacion);
  });
// js/galeria.js
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = [
      { src: 'img/pizza.png', alt: 'Pizza Margherita' },
      { src: 'img/pasta.png', alt: 'Pasta Alfredo' },
      { src: 'img/ensalada.png', alt: 'Ensalada César' },
      { src: 'img/tiramisu.png', alt: 'Tiramisú' },
      { src: 'img/lasana.png', alt: 'Lasagna Clásica' },
      // Agregá aquí más imágenes si querés
    ];
  
    const contenedor = document.getElementById('contenedor-imagenes');
    const buscador = document.getElementById('buscador');
  
    function mostrarImagenes(filtro = '') {
      contenedor.innerHTML = '';
      const filtroMinuscula = filtro.toLowerCase();
  
      const imagenesFiltradas = imagenes.filter(img =>
        img.alt.toLowerCase().includes(filtroMinuscula)
      );
  
      imagenesFiltradas.forEach(img => {
        const elementoImg = document.createElement('img');
        elementoImg.src = img.src;
        elementoImg.alt = img.alt;
        contenedor.appendChild(elementoImg);
      });
    }
  
    buscador.addEventListener('input', () => {
      mostrarImagenes(buscador.value);
    });
  
    mostrarImagenes(); // Cargar todo al inicio
  });
  
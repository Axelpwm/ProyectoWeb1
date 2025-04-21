function cambiarPagina() {
    const p1 = document.getElementById('pagina1');
    const p2 = document.getElementById('pagina2');
  
    if (paginaActual === 1) {
      p1.style.visibility = 'hidden';
      p1.style.position = 'absolute';
      p2.style.visibility = 'visible';
      p2.style.position = 'static';
      paginaActual = 2;
    } else {
      p1.style.visibility = 'visible';
      p1.style.position = 'static';
      p2.style.visibility = 'hidden';
      p2.style.position = 'absolute';
      paginaActual = 1;
    }
  }
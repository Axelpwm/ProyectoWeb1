
const panorama = new PANOLENS.ImagePanorama('img/restaurant360.png'); 
const viewer = new PANOLENS.Viewer({
  container: document.getElementById('panorama-container')
});
viewer.add(panorama);

//  hotspots
const crearHotspot = (x, y, z, contenido) => {
  const infospot = new PANOLENS.Infospot(20, 'img/hotspot.png');
  infospot.position.set(x, y, z);
  infospot.addHoverText(contenido.texto || "Info");

  if (contenido.html) {
    const div = document.createElement("div");
    div.innerHTML = contenido.html;
    div.className = "tooltip";
    infospot.addEventListener("click", () => {
      infospot.focus();
      infospot.element.innerHTML = div.outerHTML;
    });
  }

  panorama.add(infospot);
};

// Zona interactiva
const zonas = [
  
  {
    x: -200,
    y: -10,
    z: -350,
    texto: "Piano",
    html: `
    <div style="padding: 10px; background: rgba(255,255,255,0.95); border-radius: 8px;">
      <h3>Monitor</h3>
      <button onclick="document.getElementById('monitorAudio').pause()" 
              style="padding: 10px 20px; font-weight: bold; background-color: #c62828; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Pausar Audio
      </button>
      <audio id="monitorAudio" autoplay>
          <source src="mp3/piano.mp3" type="audio/mpeg">
        </audio>
      </div>
    `
  },
  { x: 200, y: 80, z: -200, texto: "Zona 2 - decoracion con vegetacion", html: "<h3>Decoracion con vegetacion</h3>" },
  { x: 300, y: 50, z: 50, texto: "Bar", html:` <p>Ofrecemos el mejor vino para degustar y complementar tu experiencia gastronómica.</p> </div>"<img src='img/vino.png' width='200' alt='deco'> `},
  {
    x: -80,
    y: -10,
    z: 250,
    texto: "Mesa", 
    html: `
      <div class="video-container">
        <h3>Como hacer pasta</h3>
        <div class="video-wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
          <iframe 
            src="https://www.youtube.com/embed/K6Sf-2cKE0s" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `
  },
  { x: 0, y: 150, z: 100, texto: "Zona 5 - Ventilacion", html: "<h3>Ventilacion</h3>" },
  { x: -150, y: -20, z: -100, texto: "Mesa para cuatro", html: "<h3>Pasta fresca tiene más sabor y textura; la comercial, solo conveniencia.</h3>" },
  { x: 200, y: 110, z: 300, texto: "Postre", html: "<img src='img/tiramisu.png' width='200' alt='deco'>" },
  {
    x: -250,
    y: -50,
    z: 100,
    texto: "Sobre nosotros",
    html: `
      <div>
        <h3>Sobre Nosotros</h3>
        <p>Puedes leer más sobre nosotros en el siguiente enlace:</p>
        <a href="pdf/about.pdf" target="_blank" style="color: #a52a2a; font-weight: bold;">
          Ver PDF
        </a>
      </div>
    `
  },
  
  //Archivos con imagenes
  { x: 50, y: -150, z: -400, texto: "Pasta", html: "<h3>La pasta Alfredo es un plato cremoso de origen italiano-americano, preparado con fettuccine y una salsa a base de mantequilla, crema y queso parmesano. Es suave, rica y perfecta para acompañar con pollo o camarones.</h3><img src='img/pasta.png' width='200' alt='deco'>" },
  
  // Archivos de audio
  { x: -980, y: -20, z: -100, texto: "Lasagna", html: "<img src='img/lasana.png' width='200' alt='deco'>" }
];

//  Crear las zonas
zonas.forEach((zona) => {
  crearHotspot(zona.x, zona.y, zona.z, {
    texto: zona.texto,
    html: zona.html
  });
});
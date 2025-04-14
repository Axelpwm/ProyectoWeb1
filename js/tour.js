const container = document.getElementById('panolens-container');
const panorama = new PANOLENS.ImagePanorama('./img/restaurant360.JPG');
const viewer = new PANOLENS.Viewer({ container });

viewer.add(panorama);

// Example: 10 Interactive Zones
const zones = [
  { pos: {x: 5000, y: 0, z: 0}, label: "Cocina" },
  { pos: {x: -5000, y: 0, z: 0}, label: "Barra" },
  { pos: {x: 0, y: 0, z: 5000}, label: "Entrada" },
  { pos: {x: 0, y: 0, z: -5000}, label: "Mesas VIP" },
  { pos: {x: 3000, y: 1000, z: 3000}, label: "Zona Infantil" },
  { pos: {x: -3000, y: -1000, z: 3000}, label: "Baños" },
  { pos: {x: 3000, y: 1000, z: -3000}, label: "Salón Principal" },
  { pos: {x: -3000, y: -1000, z: -3000}, label: "Terraza" },
  { pos: {x: 2500, y: 500, z: 0}, label: "Decoración" },
  { pos: {x: -2500, y: 500, z: 0}, label: "Chef Especial" },
];

zones.forEach(zone => {
  const infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
  infospot.position.set(zone.pos.x, zone.pos.y, zone.pos.z);
  infospot.addHoverText(zone.label);
  panorama.add(infospot);
});

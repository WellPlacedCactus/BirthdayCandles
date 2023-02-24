
class PLoader {

  constructor() {}

  loadRect(h) {
    const canvas = document.createElement('canvas');
    const c = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 100;
    c.fillStyle = `hsl(${h}, 50%, 50%)`;
    c.shadowColor = `hsl(${h + 5}, 50%, 50%)`;
    c.shadowBlur = 25;
    c.fillRect(canvas.width / 2 - 8,
               canvas.height / 2 - 8,
               16, 16);
    return canvas;
  }
}
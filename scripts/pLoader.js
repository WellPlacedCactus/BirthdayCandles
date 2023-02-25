
class PLoader {

  constructor() {}

  loadImage(s, h) {
    const canvas = document.createElement('canvas');
    const c = canvas.getContext('2d');
    const canvasSize = 1000;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    c.fillStyle = `hsl(${h}, 50%, 50%)`;
    c.shadowColor = `hsl(${h + 5}, 50%, 50%)`;
    c.shadowBlur = 25;
    c.fillRect((canvas.width - s) / 2,
               (canvas.height - s) / 2,
               s, s);
    return canvas;
  }
}
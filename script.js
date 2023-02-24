
(() => {

  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');
  const mouse = {};
  const parts = [];
  const pLoader = new PLoader();
  const image = pLoader.loadRect(240);

  const loop = () => {

    for (let i = 0; i < 1; i++) {
      parts.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: Math.random() - 0.5,
        vy: Math.random() - 1,
        s: 1
      });
    }

    c.globalCompositeOperation = 'lighter';
    
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = parts.length - 1; i >= 0; --i) {
      const p = parts[i];
      const { x, y, vx, vy, s } = p;
      p.x += vx;
      p.y += vy;
      p.s -= 0.01;
      c.drawImage(image,
                  x - image.width * s / 2,
                  y - image.height * s / 2,
                  image.width * s,
                  image.height  * s);
      if (s < 0) parts.splice(i, 1);
    }

    requestAnimationFrame(loop);
  };

  addEventListener('load', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.x = 0;
    mouse.y = 0;
    mouse.down = false;
    requestAnimationFrame(loop);
  });

  addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });

  addEventListener('mousemove', ({x, y}) => {
    mouse.x = x;
    mouse.y = y;
  });

  addEventListener('mousedown', () => {
    mouse.down = true;
  });

  addEventListener('mouseup', () => {
    mouse.down = false;
  });
  
  addEventListener('touchmove', ({touches}) => {
    const t = touches[0];
    mouse.x = t.clientX;
    mouse.y = t.clientY;
  });

  addEventListener('touchstart', () => {
    mouse.down = true;
  });

  addEventListener('touchend', () => {
    mouse.down = false;
  });

})();
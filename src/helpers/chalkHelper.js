export function drawInChalk(ctx, startX, startY, endX, endY, brushSize = 7, duration = 500) {
  return new Promise(resolve => {
    let start = null;
    let lastStepTimestamp = null;
    const oldPosition = {
      x: startX,
      y: startY
    };
    const newPosition = {
      x: null,
      y: null
    };
    const lineXSize = endX - startX;
    const lineYSize = endY - startY;

    function step(timestamp) {
      if (!start) start = timestamp;
      if (!lastStepTimestamp) lastStepTimestamp = timestamp;
      const progress = (timestamp - start) / duration * 100;
      const sinceLastStep = timestamp - lastStepTimestamp;
      const progressLastStep = sinceLastStep / duration * 100;
      lastStepTimestamp = timestamp;
      const moveX = lineXSize * progressLastStep / 100;
      const moveY = lineYSize * progressLastStep / 100;

      newPosition.x = oldPosition.x + moveX;
      newPosition.y = oldPosition.y + moveY;
      ctx.beginPath();
      ctx.lineWidth = brushSize;
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';

      ctx.lineCap = 'round';
      ctx.moveTo(oldPosition.x, oldPosition.y);
      ctx.lineTo(newPosition.x, newPosition.y);
      ctx.stroke();

      const length = Math.round(Math.sqrt(Math.pow(newPosition.x - oldPosition.x, 2) + Math.pow(oldPosition.y - newPosition.y,2)) / (5 / brushSize));
      const xUnit = (newPosition.x-oldPosition.x)/length;
      const yUnit = (newPosition.y-oldPosition.y)/length;
      for(let i = 0; i < length; i++){
        const xCurrent = oldPosition.x+(i*xUnit);
        const yCurrent = oldPosition.y+(i*yUnit);
        const xRandom = xCurrent + (Math.random() - 0.5) * brushSize * 1.2;
        const yRandom = yCurrent + (Math.random() - 0.5) * brushSize * 1.2;
        ctx.clearRect(xRandom, yRandom, Math.random() * 2 + 2, Math.random() + 1);
      }

      oldPosition.x = newPosition.x;
      oldPosition.y = newPosition.y;

      if (progress < 100) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}
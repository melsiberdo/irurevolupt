function drawAreas() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Redraw all areas
  for (let i = 0; i < areas.length; i++) {
    let area = areas[i];
    context.beginPath();
    context.fillStyle = area.color;
    context.fillRect(area.x, area.y, area.width, area.height);
    context.closePath();
  }

  // Redraw the current drawing
  context.beginPath();
  context.fillStyle = currentDrawing.color;
  context.fillRect(currentDrawing.x, currentDrawing.y, currentDrawing.width, currentDrawing.height);
  context.closePath();
}

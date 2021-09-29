function zimet() {
    
    var kanva = document.getElementById('eveliiina');
    var context = kanva.getContext('2d');
    var centerX = kanva.width / 2;
    var centerY = kanva.height / 2;
    var radius = 70;
    var eyeRadius = 10;
    var eyeXOffset = 25;
    var eyeYOffset = 20;
    
    // aplis
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'yellow';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.stroke();
}
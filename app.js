document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let context = canvas.getContext("2d");
        
    context.fillStyle = "#FF0000";
    context.beginPath();
        
    context.moveTo(31 * 7, 29 * 7); // context.moveTo(31 * 7, 30 * 7); ...
    context.lineTo(30 * 7, 29 * 7); // ... context.moveTo(30 * 7, 30 * 7); ...
    context.lineTo(30 * 7, 29 * 7);
    context.lineTo(29 * 7, 29 * 7);
    context.lineTo(29 * 7, 28 * 7);
    context.lineTo(28 * 7, 28 * 7);
    context.lineTo(28 * 7, 27 * 7);
    context.lineTo(27 * 7, 27 * 7);
    context.lineTo(27 * 7, 26 * 7);
    context.lineTo(26 * 7, 26 * 7);
    context.lineTo(26 * 7, 25 * 7);
    context.lineTo(25 * 7, 25 * 7);
    context.lineTo(25 * 7, 24 * 7);
    context.lineTo(24 * 7, 24 * 7);
    context.lineTo(24 * 7, 23 * 7);
    context.lineTo(23 * 7, 23 * 7);
    context.lineTo(23 * 7, 22 * 7);
    context.lineTo(22 * 7, 22 * 7);
    context.lineTo(22 * 7, 21 * 7);
    context.lineTo(21 * 7, 21 * 7);
    context.lineTo(21 * 7, 20 * 7);
    context.lineTo(20 * 7, 20 * 7);
        
    context.lineTo(20 * 7, 13 * 7);
        
    context.lineTo(21 * 7, 13 * 7);
    context.lineTo(21 * 7, 12 * 7);
    context.lineTo(22 * 7, 12 * 7);
    context.lineTo(22 * 7, 11 * 7);
    context.lineTo(23 * 7, 11 * 7);
    context.lineTo(23 * 7, 10 * 7);
    context.lineTo(24 * 7, 10 * 7);
    context.lineTo(24 * 7, 9 * 7);
    context.lineTo(25 * 7, 9 * 7);
    context.lineTo(25 * 7, 9 * 7);
    context.lineTo(26 * 7, 9 * 7);
    context.lineTo(26 * 7, 9 * 7);
    context.lineTo(27 * 7, 9 * 7);
    context.lineTo(27 * 7, 10 * 7);
    context.lineTo(28 * 7, 10 * 7);
    context.lineTo(28 * 7, 11 * 7);
    context.lineTo(29 * 7, 11 * 7);
    context.lineTo(29 * 7, 12 * 7);
    context.lineTo(30 * 7, 12 * 7);
    context.lineTo(30 * 7, 13 * 7);
    context.lineTo(31 * 7, 13 * 7);
    context.lineTo(31 * 7, 14 * 7);
        
    context.moveTo(31 * 7, 29 * 7); // ... context.moveTo(31 * 7, 30 * 7) ...
    context.lineTo(32 * 7, 29 * 7); // ... context.moveTo(32 * 7, 30 * 7) For a pointed bottom
    context.lineTo(32 * 7, 29 * 7);
    context.lineTo(33 * 7, 29 * 7);
    context.lineTo(33 * 7, 28 * 7);
    context.lineTo(34 * 7, 28 * 7);
    context.lineTo(34 * 7, 27 * 7);
    context.lineTo(35 * 7, 27 * 7);
    context.lineTo(35 * 7, 26 * 7);
    context.lineTo(36 * 7, 26 * 7);
    context.lineTo(36 * 7, 25 * 7);
    context.lineTo(37 * 7, 25 * 7);
    context.lineTo(37 * 7, 24 * 7);
    context.lineTo(38 * 7, 24 * 7);
    context.lineTo(38 * 7, 23 * 7);
    context.lineTo(39 * 7, 23 * 7);
    context.lineTo(39 * 7, 22 * 7);
    context.lineTo(40 * 7, 22 * 7);
    context.lineTo(40 * 7, 21 * 7);
    context.lineTo(41 * 7, 21 * 7);
    context.lineTo(41 * 7, 20 * 7);
    context.lineTo(42 * 7, 20 * 7);
        
    context.lineTo(42 * 7, 13 * 7);
        
    context.lineTo(41 * 7, 13 * 7);
    context.lineTo(41 * 7, 12 * 7);
    context.lineTo(40 * 7, 12 * 7);
    context.lineTo(40 * 7, 11 * 7);
    context.lineTo(39 * 7, 11 * 7);
    context.lineTo(39 * 7, 10 * 7);
    context.lineTo(38 * 7, 10 * 7);
    context.lineTo(38 * 7, 9 * 7);
    context.lineTo(37 * 7, 9 * 7);
    context.lineTo(37 * 7, 9 * 7);
    context.lineTo(36 * 7, 9 * 7);
    context.lineTo(36 * 7, 9 * 7);
    context.lineTo(35 * 7, 9 * 7);
    context.lineTo(35 * 7, 10 * 7);
    context.lineTo(34 * 7, 10 * 7);
    context.lineTo(34 * 7, 11 * 7);
    context.lineTo(33 * 7, 11 * 7);
    context.lineTo(33 * 7, 12 * 7);
    context.lineTo(32 * 7, 12 * 7);
    context.lineTo(32 * 7, 13 * 7);
    context.lineTo(31 * 7, 13 * 7);
    context.lineTo(31 * 7, 14 * 7);
        
    context.fill();
});

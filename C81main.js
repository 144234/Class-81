canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color= "lightseagreen";
ctx.beginpath();
ctx.strokeStyle=color;
ctx.lineWidth= 2;
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e);
{
    mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop; 
     onsole.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginpath();
ctx.strokeStyle=color;
ctx.lineWidth= 2;
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.stroke();
}
function preload() {
    
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}
function draw() {
    
}
function Namer() {
    Name = document.getElementById("Name_input").value + ".png";
   console.log("Name Set As" , Name);
}
function take_snapshot() {
    save(Name);
}
setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },250);
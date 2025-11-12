// Your variables go here


function preload() {
    // Load ressources before setup
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
}

function draw() {
    // Code that runs repeatedly code here
    background(200);
    fill("#FF0000");
    rect(200,200,150,200);
    fill(0,255,255);
    rect(225,250,60,70);
    fill(0,255,255);
    rect(320,250,30,70); 
    fill(130,130,114);
    circle(240,400,60);
    circle(310,400,60);
}
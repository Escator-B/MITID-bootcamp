// Your variables go here


function preload() {
    // Load ressources before setup
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    synth = new p5.MonoSynth();
}

function draw() {
    // Code that runs repeatedly code here
    background(200);


    circle(mouseX,mouseY,100);
}

function mousePressed() {
    let red = random (0, 255);
    let green = random (0, 255);
    let blue = random (0, 255);
    fill(red, green, blue);

    // Play a note when the mouse is pressed
    // 440 is the frequency in Hertz
    // 0.5 -> velocity (volume, from 0 to 1)
    // 0 -> time from now in seconds
    // 0.2 -> duration of the note (in seconds)
    synth.play(440, 0.5, 0, 0.2);
}
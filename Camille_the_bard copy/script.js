// Your variables go here

// a variable to store the video
let video;
// a variable to store the model
let bodyPose;
// a variable to store the results
let poses = [];
// a variable to store the Servo
let CartServo;
let longArmServo;
let shortArmServo;


function preload() {
    // Load ressources before setup

    // Load the bodyPose model
    bodyPose = ml5.bodyPose();


    // Load the Arduino board
        loadBoard();
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    // start capturing  video
    video = createCapture (VIDEO);
    // hide the video element
    video.hide();

    // start the bodyPose detection
    bodyPose.detectStart(video, function(results){
        // make the results from the model globally accessible in the poses variable
        poses = results;
    });

   
}

        

function draw() {
    // Code that runs repeatedly code here
    // background(200);
        image(video, 0, 0);

    // get positions
    let leftEar = poses[0].left_ear;
    let rightEar = poses[0].right_ear;

    // define distance
    let distanceEars = dist(leftEar.x, leftEar.y, rightEar.x, rightEar.y)

    // activate buzzer depending on distance between ears
    var five = require("johnny-five");
    var board = new five.Board(); 
    
    board.on("ready", function() {

    // Create a standard `piezo` instance on pin 3
    var piezo = new five.Piezo(3);
    
    piezo.play({
    song: [
    [ distanceEars, 1 ], // Play frequency 698 for 1 beat
    [ distanceEars, 2 ] // ...
  ]
});
}

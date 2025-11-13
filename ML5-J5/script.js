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

    // create the Servo object on pin 3
    longArmServo = new five.Servo(6);
    shortArmServo = new five.Servo(3);
    kartServo = new five.Servo(5);
}

function draw() {
    // Code that runs repeatedly code here
    // background(200);
        image(video, 0, 0);

    // make sure that we have at least one pose detected
        if(poses.length > 0){

            // create a variable to store the wrist pose
            let nose = poses[0].right_nose.y;
            let angleNose = map(wrist, 0, 500, 40, 120);
            CartServo.to(angleNose);
            Servo.to(angle);

            // long arm servo control mapped on left wrist y
            let leftWristy = poses[0].left_wrist.y;
            let angleLWristy = map(leftWristy, 0, 500, 0, 180)
            longArmServo.to(angleLWristy);

            // short arm servo control mapped on right wrist y
            let rightWristx = poses[0].right_wrist.y;
            let angleRWristx = map(rightWristx, 0, 500, 0, 180);

            // check if the hand is on the left of the screen
            // if(wrist.x < width/2){

            // switch on the Servo
            //Servo.to(0);
            // } else {
                // Servo.to(180);
        }
        
    }

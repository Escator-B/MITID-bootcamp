// Your variables go here
// a variable to store the video element
let video;
// a variable to store the bodypose model
let bodyPose;
// a variable to store the results
let poses = []

function preload() {
    // Load ressources before setup
    bodyPose = ml5.bodyPose()
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    video = createCapture(VIDEO);
    video.hide();


    // start the model detection
    bodyPose.detectStart(video, function(results){
    // we store the result in a global variable
        poses = results
    })
}

function draw() {
    // Code that runs repeatedly code here
    background(200);
    image(video,0,0);
    // make sure we detect at least one pose
    if(poses.length > 0){
        let nose = poses[0].nose;
        // console.log(nose);
        // draw a circle on the nose
        fill(255,0,0);
        circle(nose.x, nose.y, 20);
    
        // target the left wrist position
        let leftWrist = poses[0].left_wrist;
        if (leftWrist.y < 100){
            //do stuff of hand is raised
            background(0, 255, 0, 150)
        }

        // draw glasses
        // get positions
        let leftEye = poses[0].left_eye;
        let rightEye = poses[0].right_eye;
        let leftEar = poses[0].left_ear;
        let rightEar = poses[0].right_ear;
        // get the distance between eyes
        let distance = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);
        let distanceEars = dist(leftEar.x, leftEar.y, rightEar.x, rightEar.y)
        // draw glasses
        noFill();
        stroke(255,0,0);
        strokeWeight(10);
        circle(leftEye.x, leftEye.y, 40);
        circle(rightEye.x, rightEye.y, 40);
        rect(rightEar.x, rightEar.y-25, distanceEars, 10);

    }
}

function mousePressed(){
    console.log(poses);
    
}
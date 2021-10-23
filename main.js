rightWristX = 0;
leftWristX = 0;
difference = 0; 
function setup() {
    canvas = createCanvas(400,400) 
    canvas.position(700,180)
    video = createCapture(VIDEO)
    video.size(500,500)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded() {
    console.log("modelLoaded")
}

function draw() {
    background("lightblue")
    stroke("darkblue")
    text("Coding", 200,200)  
    textSize(difference) 
    }

    function gotPoses(results) {
        console.log(results); 
        rightWristX = results[0].pose.rightWrist.x
        leftWristX = results[0].pose.leftWrist.x
        console.log(rightWristX,leftWristX,difference);
        difference = floor(leftWristX - rightWristX)
    
    }

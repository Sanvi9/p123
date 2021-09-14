function setup() {
    canvas = createCanvas(400,400) 
    canvas.position(700,180)
    video = createCapture(VIDEO)
    video.size(500,500)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotposes)
}

function modelLoaded() {
    console.log("modelLoaded")
}

function draw() {
    fill("skyblue")
    text("Coding", 200,200)
}
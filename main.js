difference = 0;
nosex=0;
nosey=0;
leftWristx=0;
rightWristx=0;

function preload(){

}

function setup(){
canvas=createCanvas(500 , 420);
canvas.position(580 , 130);
video=createCapture(VIDEO);
video.size(500 , 500);
posenet=ml5.poseNet(video , modelLoaded);
posenet.on("pose",gotPoses );
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}

function modelLoaded(){
    console.log("Model Is Loaded!");
}

function draw(){
    background("rgb(170, 170, 241)");
fill("blue");
stroke("black");
square(nosex,nosey,difference);
}

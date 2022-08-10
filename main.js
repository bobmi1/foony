leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup() {
video = createCapture(VIDEO)
video.size(550, 500);
canvas = createCanvas(550, 550);
canvas.position(700,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);

}

function draw() {
background("#44c799");    
fill("#444282");
text('Agasthya', 40 ,500)
textSize(difference);
document.getElementById("Display").innerHTML = "THe font size will be " + difference + "px";
}

function modelLoaded() {
console.log("model is loaded");
}

function gotPoses(results) {
if ( results.length > 0 ) {
  console.log(results); 
  
  leftwristX = results[0].pose.leftWrist.x;
  rightwristX = results[0].pose.rightWrist.x; 
  difference = floor(leftwristX - rightwristX);
  console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + "difference = " + difference);

} 
}
function preload(){
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    circle(300, 300, 20);
}

function take_snapshot(){
    save('snapshot.png');
}
var random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_no]);

var sketch_name=quick_draw_data_set[random_no];

document.getElementById("drawn").innerHTML="Sketch to be drawn :"+ sketch_name;

var timer_check="";
var timer_counter=0;
var drawn_sketch="";
var answer_holder="";
var score=0;

function setup(){
    var canvas=createCanvas(280,280);
    canvas.center()
    
}
function draw(){
    check_sketch();

    if(drawn_sketch==sketch_name){
        answer_holder="set"
        score=score+1;
        document.getElementById("score").innerHTML="Score :"+score;
    }
}

function check_sketch(){
    if(drawn_sketch==sketch_name){
        timer_counter=timer_counter+1;
        document.getElementById("timer").innerHTML="Timer :"+timer_counter;
        console.log(timer_counter);
    }
    if(timer_counter>400){
        timer_counter=0;
        timer_check="completed";
    }
    if(timer_check=="completed" || answer_holder=="set"){
        timer_check="";
        answer_holder="";
        updateCanvas()
    }
}

function updateCanvas(){
    background("white");

    random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
    console.log(quick_draw_data_set[random_no]);

    sketch_name=quick_draw_data_set[random_no];
    document.getElementById("drawn").innerHTML="Sketch to be drawn :"+ sketch_name;

}
var audio;
var colorWorker ;
var timeWorker ;
window.onload = function() {
  audio = document.getElementById('audioPlayer');
  
}

function play(){
	audio.play();
	
	if(typeof(Worker)!=="undefined"){
		if(typeof(colorWorker)=="undefined"){
			colorWorker=new Worker("/assets/colorWorker.js");
			colorWorker.onmessage = changeColor;
		}
		if(typeof(timeWorker)=="undefined"){
			timeWorker = new Worker("/assets/timeWorker.js");
			timeWorker.postMessage();
			timeWorker.onmessage = showCurrentTime;
		}
		
	}
		
	
}

function pause(){
	audio.pause();
	stopWorker();
}

function stop(){
	audio.pause();
	audio.currentTime=0;
	stopWorker();
	clear();
}

function stopWorker(){
	if(typeof(colorWorker)!=="undefined"){
		colorWorker.terminate();
		colorWorker = undefined;
		timeWorker.terminate();
		timeWorker = undefined;
	}
}

function changeColor(event){
	document.getElementById(event.data.elementId).style.backgroundColor = event.data.color;
}

function showCurrentTime(event){
	var ct = new Number(audio.currentTime);
	document.getElementById('timeText').innerHTML = ct.toFixed(1)
	colorWorker.postMessage(ct.toFixed());
}

function clear(){
	document.getElementById('timeText').innerHTML = '0.0';
	
}

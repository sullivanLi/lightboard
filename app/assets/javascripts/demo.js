var id = [];
var audio;
var timeWorker ;
var totalLength = 49;

window.onload = function() {
  audio = document.getElementById('audioPlayer');
  for(var i=0 ; i<totalLength ; i++){
	  var j = Math.ceil((i+1)/7) ;
	  var k = ((i+1) % 7);
	  if(k === 0) k=7;
 
	  id[i] = 'td'+j+'_'+k;
  }
}

function play(){
	var skipSec = document.getElementById('skipSec').value;
	if(!isNaN(skipSec) && (skipSec > 0 && skipSec < 120)){
		audio.currentTime = skipSec;
	}
	audio.play();
	if(typeof(Worker)!=="undefined"){
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
	if(typeof(timeWorker)!=="undefined"){
		timeWorker.terminate();
		timeWorker = undefined;
	}
}

function getColorset(ct){
	if(ct>60)return;
	
	var ct_dot = ct.substr(ct.length - 1)
	if(ct_dot != 1 && ct_dot != 3 && ct_dot != 5 && ct_dot != 7 && ct_dot != 9){
		return;
	}
	console.log("ct="+ct);
	for(var i=0 ; i<id.length ; i++){
		changeColor(id[i], timeScript[ct][id[i]]);
	}
}

function changeColor(id, color){
	document.getElementById(id).style.backgroundColor = color;
}

function showCurrentTime(event){
	var ct = new Number(audio.currentTime);
	document.getElementById('timeText').innerHTML = ct.toFixed(1)
	getColorset(ct.toFixed(1));
}

function clear(){
	document.getElementById('timeText').innerHTML = '0.0';
	
}

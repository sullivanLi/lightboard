var id = [];
var audio;
var timeWorker ;
var totalLength = 42;
var demo_time = 0.0;

window.onload = function() {
  audio = document.getElementById('audioPlayer');
  for(var i=0 ; i<totalLength ; i++){
	  var j = Math.ceil((i+1)/7) ;
	  var k = ((i+1) % 7);
	  if(k === 0) k=7;
 
	  id[i] = 'td'+j+'_'+k;
  }
  websocket_init("demo");
}

function demo_open(){
	document.getElementById('ws_status').innerHTML = 'Connection : connected !'
	document.getElementById('timeGap').innerHTML = 'timeGap='+timeGap;
	document.getElementById('responesTime').innerHTML = 'responseTimeMs='+responseTimeMs;
}

function demo_play(){
	if(typeof(Worker)!=="undefined"){
		if(typeof(timeWorker)=="undefined"){
			timeWorker = new Worker("/assets/timeWorker.js");
			timeWorker.postMessage();
			timeWorker.onmessage = showCurrentTime;
		}	
	}	
}

function demo_pause(){
	stopWorker();
}

function stopWorker(){
	if(typeof(timeWorker)!=="undefined"){
		timeWorker.terminate();
		timeWorker = undefined;
	}
}

function setTdColor(){
	if(demo_time>237) stopWorker();
		
	cs =  getColorset(demo_time);
	if(typeof(cs)=="undefined") return;

	for(var i=0 ; i<id.length ; i++){
		changeColor(id[i], cs[id[i]]);
	}
}

function changeColor(id, color){
	document.getElementById(id).style.backgroundColor = color;
}

function showCurrentTime(event){
	demo_time = demo_time + 0.1;
	document.getElementById('timeText').innerHTML = demo_time
	setTdColor();
}

function clear(){
	document.getElementById('timeText').innerHTML = '0.0';
	
}

var ws = null;
var timeWorker;
var client_location;
var timeGap;

function client_init() {
  audio = document.getElementById('audioPlayer');
  audio.volume = 0; 
  client_location = "td"+document.getElementById('col').value+"_"+document.getElementById('row').value;
  
  if(ws == null){
	ws = new WebSocket("ws://localhost:8080");
	ws.onopen = function() {
	  console.log("Connection is opened");
	  ws.send('client');
	}

	ws.onclose = function() {
	  console.log("Connection is closed");
	}

	ws.onmessage = function(msg) {
	  if(msg.data === 'GO'){
	  	client_play();
	  }else if(msg.data === 'PAUSE'){
		client_pause();
	  }else if(msg.data.substring(0, 11)  === 'serverTime='){
	  	now =  (new Date()).getTime();
	  	timeGap = msg.data.substring(11);
		console.log(now);
		console.log(msg.data.substring(11));
	  }
	}
  } 
}

function ws_printTime(){
	console.log((new Date()).getTime());
}

function client_play(){
  audio.play();
  if(typeof(Worker)!=="undefined"){
    if(typeof(timeWorker)=="undefined"){
	  timeWorker = new Worker("/assets/timeWorker.js");
	  timeWorker.postMessage();
	  timeWorker.onmessage = ws_showCurrentTime;
    }	
  }	
}

function client_pause(){
	audio.pause();
	stopWorker();
}

function ws_showCurrentTime(event){
  var ct = new Number(audio.currentTime);
  document.getElementById('timeText').innerHTML = ct.toFixed(1);
  setBodyColor(ct.toFixed(1));
}

function setBodyColor(ct){
	if(ct>97)return;
	
	var ct_dot = ct.substr(ct.length - 1)
	if(ct_dot != 1 && ct_dot != 3 && ct_dot != 5 && ct_dot != 7 && ct_dot != 9){
		return;
	}
	console.log(timeScript[ct][client_location]);
	
	document.body.style.backgroundColor = timeScript[ct][client_location];
}
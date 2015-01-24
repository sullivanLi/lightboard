var ws = null;
var timeWorker;
var client_location;
var requestTime;
var responseTimeMs;
var timeGap;

function client_init() {
  audio = document.getElementById('audioPlayer');
  audio.volume = 0; 
  element_col = document.getElementById('col');
  element_row = document.getElementById('row');
  client_location = "td"+element_col.value+"_"+element_row.value;
  
  if(ws == null){
	ws = new WebSocket("ws://agtoptv.com:80");
	ws.onopen = function() {
	  console.log("Connection is opened");
	  requestTime =  (new Date()).getTime();
	  ws.send('client');
	  document.getElementById('btn_connect').disabled=true;
	  document.getElementById('location').innerHTML = 'Location : '+ element_col.value + ' - ' + element_row.value;
	}

	ws.onclose = function() {
	  console.log("Connection is closed");
	}

	ws.onmessage = function(msg) {
	  if(msg.data.substring(0, 3) === 'GO='){
		playTime = msg.data.substring(3);
	  	client_play(playTime);
	  }else if(msg.data.substring(0, 6) === 'PAUSE='){
		stopTime = msg.data.substring(6);
		client_pause(stopTime);
	  }else if(msg.data.substring(0, 11)  === 'serverTime='){
	  	now =  (new Date()).getTime();
		responseTimeMs = now - requestTime
	  	timeGap = now - msg.data.substring(11);
		document.getElementById('timeGap').innerHTML = 'timeGap='+timeGap;
		document.getElementById('responesTime').innerHTML = 'responseTimeMs='+responseTimeMs;
	  }
	}
  } 
}


function client_play(playTime){
  now =  (new Date()).getTime() - timeGap;
  if (now < playTime){
	setTimeout("client_play()", playTime - now);
	return;
  }
  audio.play();
  if(typeof(Worker)!=="undefined"){
    if(typeof(timeWorker)=="undefined"){
	  timeWorker = new Worker("/light/assets/timeWorker.js");
	  timeWorker.postMessage();
	  timeWorker.onmessage = ws_showCurrentTime;
    }	
  }	
}

function client_pause(stopTime){
    now =  (new Date()).getTime() - timeGap;
    if (parseInt(now) < parseInt(stopTime)){
  		setTimeout("client_pause()", stopTime - now);
		return;
    }
	audio.pause();
	stopWorker();
}

function ws_showCurrentTime(event){
  var ct = new Number(audio.currentTime);
  document.getElementById('timeText').innerHTML = ct.toFixed(2);
  document.getElementById('time').innerHTML = (new Date()).getTime();
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
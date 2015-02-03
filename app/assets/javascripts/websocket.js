var ws = null;
var requestTime;
var responseTimeMs;
var timeGap;
var ws_type;

function websocket_init(type) {
  ws_type = type;
  ws = new WebSocket("ws://127.0.0.1:8082");
	ws.onopen = function() {
	  console.log("Connection is opened");
	  requestTime =  (new Date()).getTime();
	  ws.send(type);
	}

	ws.onclose = function() {
	  console.log("Connection is closed");
	  document.getElementById('ws_status').innerHTML = 'Connection : closed !'
	}

	ws.onmessage = function(msg) {
	  if(msg.data.substring(0, 3) === 'GO='){
		playTime = msg.data.substring(3);
	  	play(playTime);
	  }else if(msg.data.substring(0, 6) === 'PAUSE='){
		stopTime = msg.data.substring(6);
		pause(stopTime);
	  }else if(msg.data.substring(0, 11)  === 'serverTime='){
	  	now =  (new Date()).getTime();
		responseTimeMs = now - requestTime
	  	timeGap = now - msg.data.substring(11);
	  	 ws_open();
	  }
	}
}

function ws_open(){
	if (ws_type === 'client'){
		client_open();
	}else if(ws_type === 'demo'){
		demo_open();
	}else if(ws_type === 'master'){
		master_open();
	}
}


function play(playTime){
	if (ws_type === 'client'){
		client_play(playTime);
	}else if(ws_type === 'demo'){
		demo_play(playTime);
	}else if(ws_type === 'master'){
		client_play(playTime);
	}
}

function pause(stopTime){
	if (ws_type === 'client'){
		client_pause(stopTime);
	}else if(ws_type === 'demo'){
		demo_pause(stopTime);
	}else if(ws_type === 'master'){
		client_pause(stopTime);
	}
}
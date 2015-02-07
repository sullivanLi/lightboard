var ws = null;
var requestTime;
var responseTimeMs;
var timeGap;
var ws_type;

function websocket_init(type) {
  ws_type = type;
  ws = new WebSocket("ws://112.116.19.55:8082");
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
	  if(msg.data.substring(0, 5) === 'STEP='){
		step = msg.data.substring(5);
	  	change_step(step);
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

function master_init() {
  audio = document.getElementById('audioPlayer');
  if(ws == null){
	ws = new WebSocket("ws://localhost:80");
	  ws.onopen = function() {
	  console.log("Connection is opened");
	  ws.send('master');
	  document.getElementById('btn_go').disabled=false;
	  document.getElementById('btn_pause').disabled=false;
	  document.getElementById('btn_connect').disabled=true;
	  timeGap = 0;
	}

	ws.onclose = function() {
	  console.log("Connection is closed");
	}

	ws.onmessage = function(msg) {
	  if(msg.data.substring(0, 19) === 'client connections='){
		document.getElementById('serverInfo').innerHTML = msg.data;
	  }else if(msg.data.substring(0, 3) === 'GO='){
		playTime = msg.data.substring(3);
	  	client_play(playTime);
	  }else if(msg.data.substring(0, 6) === 'PAUSE='){
		stopTime = msg.data.substring(6);
		console.log(msg.data);
		client_pause(stopTime);
	  }
	  
	}
  } 
}

function command(msg) {
  ws.send(msg);
}
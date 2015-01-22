function master_init() {
  audio = document.getElementById('audioPlayer');
  if(ws == null){
	ws = new WebSocket("ws://localhost:8080");
	  ws.onopen = function() {
	  console.log("Connection is opened");
	  ws.send('master');
	}

	ws.onclose = function() {
	  console.log("Connection is closed");
	}

	ws.onmessage = function(msg) {
	  if(msg.data.substring(0, 19) === 'client connections='){
		document.getElementById('serverInfo').innerHTML = msg.data;
	  }
	}
  } 
}

function command(msg) {
  ws.send(msg);
  if(msg.data === 'GO'){
  	audio.play();
  }
}
function master_init() {
  client_location = 'td4_4';
  websocket_init("master");
}

function master_open(){
	document.getElementById('btn_go').disabled=false;
	document.getElementById('btn_pause').disabled=false;
	document.getElementById('btn_connect').disabled=true;

	document.getElementById('ws_status').innerHTML = 'Connection : connected !'
	document.getElementById('timeGap').innerHTML = 'timeGap='+timeGap;
	document.getElementById('responesTime').innerHTML = 'responseTimeMs='+responseTimeMs;
}

function command(msg) {
  ws.send(msg);
}
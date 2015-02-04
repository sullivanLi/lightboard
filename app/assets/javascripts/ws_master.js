var btn_color = ["pink", "lightblue", "lightyellow", "lightgreen"];
var btn_color_i = 0;
var btnWorker;

function master_init() {
  client_location = 'td4_4';
  websocket_init("master");
}

function master_open(){
	document.getElementById('btn_go').style.visibility="visible";
	document.getElementById('btn_connect').style.visibility="hidden";

	//document.getElementById('ws_status').innerHTML = 'Connection : connected !'
	//document.getElementById('timeGap').innerHTML = 'timeGap='+timeGap;
	//document.getElementById('responesTime').innerHTML = 'responseTimeMs='+responseTimeMs;
    
    if(typeof(Worker)!=="undefined"){
      if(typeof(btnWorker)=="undefined"){
  	  btnWorker = new Worker("/assets/secWorker.js");
  	  btnWorker.postMessage();
  	  btnWorker.onmessage = master_showCurrentTime;
      }	
    }	
}


function master_showCurrentTime(event){
	if(btn_color_i > 3) btn_color_i = 0;
 	document.getElementById('btn_go').style.backgroundColor=btn_color[btn_color_i];
	btn_color_i = btn_color_i + 1;
}

function command(msg) {
	
  ws.send(msg);
}
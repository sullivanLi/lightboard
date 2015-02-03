var timeWorker;
var client_location;
var client_time = 0.0;

function client_init() {
  websocket_init("client");
  element_col = document.getElementById('col');
  element_row = document.getElementById('row');
  client_location = "td"+element_col.value+"_"+element_row.value;
}

function client_open(){
	 document.getElementById('btn_connect').disabled=true;
	document.getElementById('location').innerHTML = 'Location : '+ element_col.value + ' - ' + element_row.value;

	document.getElementById('ws_status').innerHTML = 'Connection : connected !'
	document.getElementById('timeGap').innerHTML = 'timeGap='+timeGap;
	document.getElementById('responesTime').innerHTML = 'responseTimeMs='+responseTimeMs;
}

function client_play(playTime){
  now =  (new Date()).getTime() - timeGap;
  if (now < playTime){
	setTimeout("client_play()", playTime - now);
	return;
  }
  if(typeof(Worker)!=="undefined"){
    if(typeof(timeWorker)=="undefined"){
	  timeWorker = new Worker("/assets/timeWorker.js");
	  timeWorker.postMessage();
	  timeWorker.onmessage = client_showCurrentTime;
    }	
  }	
}

function client_pause(stopTime){
    now =  (new Date()).getTime() - timeGap;
    if (parseInt(now) < parseInt(stopTime)){
  		setTimeout("client_pause()", stopTime - now);
		return;
    }
	stopWorker();
}

function client_showCurrentTime(event){
  client_time = client_time + 0.1;
  document.getElementById('timeText').innerHTML = client_time;
  document.getElementById('time').innerHTML = (new Date()).getTime();
  setBodyColor();
}

function setBodyColor(){
	if(client_time>237) stopWorker();

	cs =  getColorset(client_time);
	if(typeof(cs)=="undefined") return;

	document.body.style.backgroundColor = cs[client_location];
}
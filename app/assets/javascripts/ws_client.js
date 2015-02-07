var timeWorker;
var client_location;
var client_time = 0.0;
var now_step = 0;

var btn_color = ["pink", "lightblue", "lightyellow", "lightgreen"];
var btn_color_i = 0;
var btnWorker;

function client_init() {
	if(typeof(client_location)=="undefined"){
		alert("請先選位置");
		return;
	}
 	websocket_init("client");
}

function client_open(){
	removeElement(document.getElementById('btn_connect'));
	//removeElement(document.getElementById('location'));
	removeElement(document.getElementById('selectTable'));
	
	//document.getElementById('ws_status').innerHTML = 'Connection : connected !'
	//document.getElementById('timeGap').innerHTML = 'timeGap='+timeGap;
	//document.getElementById('responesTime').innerHTML = 'responseTimeMs='+responseTimeMs;
	
	set_step();
}


function change_step(step){
	now_step = step;
	set_step();
}


function set_step(){
	clearbody();
	if(step_setting[now_step][client_location]['type'] === 'color'){
		document.body.style.backgroundColor = step_setting[now_step][client_location]['value'];
	}else if(step_setting[now_step][client_location]['type'] === 'text'){
		document.getElementById('textem').innerHTML = step_setting[now_step][client_location]['value'];
	}else if(step_setting[now_step][client_location]['type'] === 'img'){
		document.getElementById('showpic').src = step_setting[now_step][client_location]['value'];
	}else if(step_setting[now_step][client_location]['type'] === 'btn'){
		document.getElementById('btn_go').style.visibility="visible";
		document.getElementById('btn_go').value = step_setting[now_step][client_location]['value'];
	    if(typeof(Worker)!=="undefined"){
	      if(typeof(btnWorker)=="undefined"){
	  	  	btnWorker = new Worker("/assets/secWorker.js");
	  	  	btnWorker.postMessage();
	  	  	btnWorker.onmessage = btn_change_color;
	      }	
	    }	
	}	
}

function clearbody(){
	document.body.style.backgroundColor = 'black';
	document.getElementById('textem').innerHTML = '';
	document.getElementById('showpic').src = '';
	document.getElementById('btn_go').style.visibility="hidden";
	if(typeof(timeWorker)!=="undefined"){
		btnWorker.terminate();
		btnWorker = undefined;
	}
}

function selectClient(location){
	client_location = 'L'+location;
	document.getElementById('location').innerHTML = location;
}


function btn_change_color(event){
	if(btn_color_i > 3) btn_color_i = 0;
 	document.getElementById('btn_go').style.backgroundColor=btn_color[btn_color_i];
	btn_color_i = btn_color_i + 1;
}

function send_step(){
	step = parseInt(now_step) + 1;
	ws.send("STEP="+step);
}


function testing(){
	
	if(typeof(now_step)=="undefined"){
		now_step = 0;
		removeElement(document.getElementById('selectTable'));
		removeElement(document.getElementById('location'));
	}
	console.log(now_step)
	console.log(step_setting[now_step][client_location])
	set_step();
	now_step = now_step + 1;
	
}
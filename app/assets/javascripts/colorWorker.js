var id = [];
var totalLength = 40;
var schedule = {};
schedule[0] = "black";
schedule[1] = "black";
schedule[2] = "white";
schedule[3] = "blue";
schedule[4] = "white";
schedule[5] = "red";
schedule[6] = "white";

var cTime;
init();

function init() {
    for(var i=0 ; i<totalLength ; i++){
  	  var j = Math.ceil((i+1)/8) ;
  	  var k = ((i+1) % 8);
  	  if(k === 0) k=8;
	 
  	  id[i] = 'td'+j+'_'+k;
    }
}


onmessage = function (oEvent) {
  cTime = oEvent.data;
  setSchedule();
};


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setSchedule(){
	if(cTime == 6) return;
	//console.log(schedule[index][1]);
	for(var i=0; i<id.length; i++){
		postMessage({ "elementId": id[i], "color": schedule[cTime]});
	}
	//setTimeout("setSchedule()", schedule[index][0]);
}
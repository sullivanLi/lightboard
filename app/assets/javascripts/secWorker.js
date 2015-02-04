onmessage = function (oEvent) {
  
  setSchedule();
};

function setSchedule(){
	postMessage();
	setTimeout("setSchedule()", 1000);
}
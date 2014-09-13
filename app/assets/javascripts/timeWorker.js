onmessage = function (oEvent) {
  
  setSchedule();
};

function setSchedule(){
	postMessage();
	setTimeout("setSchedule()", 100);
}
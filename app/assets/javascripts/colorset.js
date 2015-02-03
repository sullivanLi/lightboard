function getColorset(time){
	if(time > 0 && time < 1 ){
		return cs_arrow;
	}else if(time > 3 && time < 4 ){
		return cs_black;
	}else if(time > 190 && time < 191 ){
		return cs_i1;
	}else if(time > 195 && time < 196 ){
		return cs_love;
	}else if(time > 200 && time < 201 ){
		return cs_u;
	}else if(time > 205 && time < 206 ){
		return cs_a;
	}else if(time > 210 && time < 211 ){
		return cs_m;
	}else if(time > 215 && time < 216 ){
		return cs_i2;
	}else if(time > 220 && time < 221 ){
		return cs_black;
	}
}


var cs_i1 = {
	td1_1:'black', td1_2:'black', td1_3:'black', td1_4:'red', td1_5:'black', td1_6:'black', td1_7:'black', 
	td2_1:'black', td2_2:'black', td2_3:'black', td2_4:'red', td2_5:'black', td2_6:'black', td2_7:'black', 
	td3_1:'black', td3_2:'black', td3_3:'black', td3_4:'red', td3_5:'black', td3_6:'black', td3_7:'black', 
	td4_1:'black', td4_2:'black', td4_3:'black', td4_4:'red', td4_5:'black', td4_6:'black', td4_7:'black', 
	td5_1:'black', td5_2:'black', td5_3:'black', td5_4:'red', td5_5:'black', td5_6:'black', td5_7:'black', 
	td6_1:'black', td6_2:'black', td6_3:'black', td6_4:'red', td6_5:'black', td6_6:'black', td6_7:'black',
};


var cs_love = { 
	td1_1:'black', td1_2:'red', td1_3:'red', td1_4:'black', td1_5:'red', td1_6:'red', td1_7:'black', 
	td2_1:'red', td2_2:'white', td2_3:'white', td2_4:'red', td2_5:'white', td2_6:'white', td2_7:'red', 
	td3_1:'red', td3_2:'white', td3_3:'white', td3_4:'white', td3_5:'white', td3_6:'white', td3_7:'red', 
	td4_1:'black', td4_2:'red', td4_3:'white', td4_4:'white', td4_5:'white', td4_6:'red', td4_7:'black', 
	td5_1:'black', td5_2:'black', td5_3:'red', td5_4:'white', td5_5:'red', td5_6:'black', td5_7:'black',
	td6_1:'black', td6_2:'black', td6_3:'black', td6_4:'red', td6_5:'black', td6_6:'black', td6_7:'black'
};


var cs_u = {
	td1_1:'black', td1_2:'red', td1_3:'black', td1_4:'black', td1_5:'black', td1_6:'red', td1_7:'black', 
	td2_1:'black', td2_2:'red', td2_3:'black', td2_4:'black', td2_5:'black', td2_6:'red', td2_7:'black', 
	td3_1:'black', td3_2:'red', td3_3:'black', td3_4:'black', td3_5:'black', td3_6:'red', td3_7:'black', 
	td4_1:'black', td4_2:'red', td4_3:'black', td4_4:'black', td4_5:'black', td4_6:'red', td4_7:'black', 
	td5_1:'black', td5_2:'red', td5_3:'black', td5_4:'black', td5_5:'black', td5_6:'red', td5_7:'black', 
	td6_1:'black', td6_2:'black', td6_3:'red', td6_4:'red', td6_5:'red', td6_6:'black', td6_7:'black',
};


var cs_a = { 
	td1_1:'black', td1_2:'pink',  td1_3:'pink',  td1_4:'pink',  td1_5:'pink',  td1_6:'pink', td1_7:'black', 
	td2_1:'black', td2_2:'black', td2_3:'black', td2_4:'black', td2_5:'black', td2_6:'pink', td2_7:'black', 
	td3_1:'black', td3_2:'pink',  td3_3:'pink',  td3_4:'pink',  td3_5:'pink',  td3_6:'pink', td3_7:'black', 
	td4_1:'black', td4_2:'pink',  td4_3:'black', td4_4:'black', td4_5:'black', td4_6:'pink', td4_7:'black', 
	td5_1:'black', td5_2:'pink',  td5_3:'black', td5_4:'black', td5_5:'black', td5_6:'pink', td5_7:'black',
	td6_1:'black', td6_2:'pink',  td6_3:'pink',  td6_4:'pink',  td6_5:'pink',  td6_6:'pink', td6_7:'black'
};

var cs_m = {
	td1_1:'black', td1_2:'black', td1_3:'black', td1_4:'black', td1_5:'black', td1_6:'black', td1_7:'black', 
	td2_1:'black', td2_2:'pink',  td2_3:'pink',  td2_4:'pink',  td2_5:'pink',  td2_6:'pink',  td2_7:'black', 
	td3_1:'black', td3_2:'pink',  td3_3:'black', td3_4:'pink',  td3_5:'black', td3_6:'pink',  td3_7:'black', 
	td4_1:'black', td4_2:'pink',  td4_3:'black', td4_4:'pink',  td4_5:'black', td4_6:'pink',  td4_7:'black', 
	td5_1:'black', td5_2:'pink',  td5_3:'black', td5_4:'pink',  td5_5:'black', td5_6:'pink',  td5_7:'black', 
	td6_1:'black', td6_2:'pink',  td6_3:'black', td6_4:'pink',  td6_5:'black', td6_6:'pink',  td6_7:'black',
};

var cs_i2 = {
	td1_1:'black', td1_2:'black', td1_3:'black', td1_4:'pink', td1_5:'black', td1_6:'black', td1_7:'black', 
	td2_1:'black', td2_2:'black', td2_3:'black', td2_4:'black', td2_5:'black', td2_6:'black', td2_7:'black', 
	td3_1:'black', td3_2:'black', td3_3:'black', td3_4:'pink', td3_5:'black', td3_6:'black', td3_7:'black', 
	td4_1:'black', td4_2:'black', td4_3:'black', td4_4:'pink', td4_5:'black', td4_6:'black', td4_7:'black', 
	td5_1:'black', td5_2:'black', td5_3:'black', td5_4:'pink', td5_5:'black', td5_6:'black', td5_7:'black', 
	td6_1:'black', td6_2:'black', td6_3:'black', td6_4:'pink', td6_5:'black', td6_6:'black', td6_7:'black',
};


var cs_arrow = {
	td1_1:'black', td1_2:'black', td1_3:'black', td1_4:'white', td1_5:'black', td1_6:'black', td1_7:'black', 
	td2_1:'black', td2_2:'black', td2_3:'white', td2_4:'white', td2_5:'white', td2_6:'black', td2_7:'black', 
	td3_1:'black', td3_2:'white', td3_3:'black', td3_4:'white', td3_5:'black', td3_6:'white', td3_7:'black', 
	td4_1:'white', td4_2:'black', td4_3:'black', td4_4:'white', td4_5:'black', td4_6:'black', td4_7:'white', 
	td5_1:'black', td5_2:'black', td5_3:'black', td5_4:'white', td5_5:'black', td5_6:'black', td5_7:'black', 
	td6_1:'black', td6_2:'black', td6_3:'black', td6_4:'white', td6_5:'black', td6_6:'black', td6_7:'black',
};

var cs_black = {
	td1_1:'black', td1_2:'black', td1_3:'black', td1_4:'black', td1_5:'black', td1_6:'black', td1_7:'black', 
	td2_1:'black', td2_2:'black', td2_3:'black', td2_4:'black', td2_5:'black', td2_6:'black', td2_7:'black', 
	td3_1:'black', td3_2:'black', td3_3:'black', td3_4:'black', td3_5:'black', td3_6:'black', td3_7:'black', 
	td4_1:'black', td4_2:'black', td4_3:'black', td4_4:'black', td4_5:'black', td4_6:'black', td4_7:'black', 
	td5_1:'black', td5_2:'black', td5_3:'black', td5_4:'black', td5_5:'black', td5_6:'black', td5_7:'black', 
	td6_1:'black', td6_2:'black', td6_3:'black', td6_4:'black', td6_5:'black', td6_6:'black', td6_7:'black',
};
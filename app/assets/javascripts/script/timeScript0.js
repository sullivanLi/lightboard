
var timeScript = {};
var tc_blank = {
	td1_1:'white', td1_2:'white', td1_3:'white', td1_4:'white', td1_5:'white', td1_6:'white', td1_7:'white', 
	td2_1:'white', td2_2:'black', td2_3:'black', td2_4:'black', td2_5:'black', td2_6:'black', td2_7:'white', 
	td3_1:'white', td3_2:'black', td3_3:'black', td3_4:'black', td3_5:'black', td3_6:'black', td3_7:'white', 
	td4_1:'white', td4_2:'black', td4_3:'black', td4_4:'black', td4_5:'black', td4_6:'black', td4_7:'white', 
	td5_1:'white', td5_2:'black', td5_3:'black', td5_4:'black', td5_5:'black', td5_6:'black', td5_7:'white', 
	td6_1:'white', td6_2:'black', td6_3:'black', td6_4:'black', td6_5:'black', td6_6:'black', td6_7:'white',
	td7_1:'white', td7_2:'white', td7_3:'white', td7_4:'white', td7_5:'white', td7_6:'white', td7_7:'white'
};

var tc_num3 = {
	td1_1:'black', td1_2:'white', td1_3:'white', td1_4:'white', td1_5:'white', td1_6:'white', td1_7:'black', 
	td2_1:'black', td2_2:'black', td2_3:'black', td2_4:'black', td2_5:'black', td2_6:'white', td2_7:'black', 
	td3_1:'black', td3_2:'black', td3_3:'black', td3_4:'black', td3_5:'black', td3_6:'white', td3_7:'black', 
	td4_1:'black', td4_2:'white', td4_3:'white', td4_4:'white', td4_5:'white', td4_6:'white', td4_7:'black', 
	td5_1:'black', td5_2:'black', td5_3:'black', td5_4:'black', td5_5:'black', td5_6:'white', td5_7:'black', 
	td6_1:'black', td6_2:'black', td6_3:'black', td6_4:'black', td6_5:'black', td6_6:'white', td6_7:'black',
	td7_1:'black', td7_2:'white', td7_3:'white', td7_4:'white', td7_5:'white', td7_6:'white', td7_7:'black'
};

var tc_num2 = {
	td1_1:'black', td1_2:'white', td1_3:'white', td1_4:'white', td1_5:'white', td1_6:'white', td1_7:'black', 
	td2_1:'black', td2_2:'black', td2_3:'black', td2_4:'black', td2_5:'black', td2_6:'white', td2_7:'black', 
	td3_1:'black', td3_2:'black', td3_3:'black', td3_4:'black', td3_5:'black', td3_6:'white', td3_7:'black', 
	td4_1:'black', td4_2:'white', td4_3:'white', td4_4:'white', td4_5:'white', td4_6:'white', td4_7:'black', 
	td5_1:'black', td5_2:'white', td5_3:'black', td5_4:'black', td5_5:'black', td5_6:'black', td5_7:'black', 
	td6_1:'black', td6_2:'white', td6_3:'black', td6_4:'black', td6_5:'black', td6_6:'black', td6_7:'black',
	td7_1:'black', td7_2:'white', td7_3:'white', td7_4:'white', td7_5:'white', td7_6:'white', td7_7:'black'
};

var tc_num1 = {
	td1_1:'black', td1_2:'black', td1_3:'black', td1_4:'white', td1_5:'black', td1_6:'black', td1_7:'black', 
	td2_1:'black', td2_2:'black', td2_3:'black', td2_4:'white', td2_5:'black', td2_6:'black', td2_7:'black', 
	td3_1:'black', td3_2:'black', td3_3:'black', td3_4:'white', td3_5:'black', td3_6:'black', td3_7:'black', 
	td4_1:'black', td4_2:'black', td4_3:'black', td4_4:'white', td4_5:'black', td4_6:'black', td4_7:'black', 
	td5_1:'black', td5_2:'black', td5_3:'black', td5_4:'white', td5_5:'black', td5_6:'black', td5_7:'black', 
	td6_1:'black', td6_2:'black', td6_3:'black', td6_4:'white', td6_5:'black', td6_6:'black', td6_7:'black',
	td7_1:'black', td7_2:'black', td7_3:'black', td7_4:'white', td7_5:'black', td7_6:'black', td7_7:'black'
};

var tc_go = {
	td1_1:'white', td1_2:'white', td1_3:'white', td1_4:'black', td1_5:'white', td1_6:'white', td1_7:'white', 
	td2_1:'white', td2_2:'black', td2_3:'black', td2_4:'black', td2_5:'white', td2_6:'black', td2_7:'white', 
	td3_1:'white', td3_2:'black', td3_3:'black', td3_4:'black', td3_5:'white', td3_6:'black', td3_7:'white', 
	td4_1:'white', td4_2:'black', td4_3:'white', td4_4:'black', td4_5:'white', td4_6:'black', td4_7:'white', 
	td5_1:'white', td5_2:'black', td5_3:'white', td5_4:'black', td5_5:'white', td5_6:'black', td5_7:'white', 
	td6_1:'white', td6_2:'black', td6_3:'white', td6_4:'black', td6_5:'white', td6_6:'black', td6_7:'white',
	td7_1:'white', td7_2:'white', td7_3:'white', td7_4:'black', td7_5:'white', td7_6:'white', td7_7:'white'
};

var tc_black = {
	td1_1:'black', td1_2:'black', td1_3:'black', td1_4:'black', td1_5:'black', td1_6:'black', td1_7:'black', 
	td2_1:'black', td2_2:'black', td2_3:'black', td2_4:'black', td2_5:'black', td2_6:'black', td2_7:'black', 
	td3_1:'black', td3_2:'black', td3_3:'black', td3_4:'black', td3_5:'black', td3_6:'black', td3_7:'black', 
	td4_1:'black', td4_2:'black', td4_3:'black', td4_4:'black', td4_5:'black', td4_6:'black', td4_7:'black', 
	td5_1:'black', td5_2:'black', td5_3:'black', td5_4:'black', td5_5:'black', td5_6:'black', td5_7:'black', 
	td6_1:'black', td6_2:'black', td6_3:'black', td6_4:'black', td6_5:'black', td6_6:'black', td6_7:'black',
	td7_1:'black', td7_2:'black', td7_3:'black', td7_4:'black', td7_5:'black', td7_6:'black', td7_7:'black'
};


timeScript[0.1] = tc_num3;
timeScript[0.3] = tc_num2;
timeScript[0.5] = tc_num1;
timeScript[0.7] = tc_go;
timeScript[0.9] = tc_blank;
timeScript[1.1] = tc_num3;
timeScript[1.3] = tc_num2;
timeScript[1.5] = tc_num1;
timeScript[1.7] = tc_go;
timeScript[1.9] = tc_blank;
timeScript[2.1] = tc_num3;
timeScript[2.3] = tc_num2;
timeScript[2.5] = tc_num1;
timeScript[2.7] = tc_go;
timeScript[2.9] = tc_blank;
timeScript[3.1] = tc_num3;
timeScript[3.3] = tc_num2;
timeScript[3.5] = tc_num1;
timeScript[3.7] = tc_go;
timeScript[3.9] = tc_blank;

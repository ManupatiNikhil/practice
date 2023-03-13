/**
 * 
 */function requiredvalidation(){
var s = document.forms["form1"]["fname"].value;
var s1 = document.forms["form1"]["lname"].value;
if (s == null && s1 == null|| s == "" && s1 == "")
{
alert("Please input firstname and password");
return false;
}
else if(s == null || s == ""){
	alert("Please input firstname");
return false;
}
else if(s1 == null || s1 == ""){
	alert("Please input lastname");
return false;
}}
function printinput(){
requiredvalidation();
const output = document.getElementById("myTBody");
output.innerHTML = form1.fname.value;
const output1 = document.getElementById("myTBody1");
output1.innerHTML = form1.lname.value;
}
/*var storedItem = localStorage.getItem("storedItem");
var data = form1.fname.value;
localStorage.setItem("storedItem",data);
document.getElementById("output").innerHTML=data;*/
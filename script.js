// your code here
var url = document.querySelector("h3").innerHTML;
var btn = document.getElementById("button");
btn.addEventListener('click',fetchData);

function fetchData(){
	var nameData = document.getElementById("name");
	var nameAttr = nameData.getAttribute("name");
	var yearData = document.getElementById("year");
	var yearAttr = yearData.getAttribute("name");
	var str = "";
	if(nameData.value && yearData){
		str = url + `?${nameAttr}=${nameData.value}&${yearAttr}=${yearData.value}`;
		document.querySelector("h3").innerHTML = str;
	}
	else if(nameData && !yearData){
		str = url + `?${nameAttr}=${nameData.value}`;
		document.querySelector("h3").innerHTML = str;
	}
	
	
	// alert(url);
	
	
}


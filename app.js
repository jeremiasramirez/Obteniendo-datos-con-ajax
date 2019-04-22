 
let data =document.getElementById("data"),
 	data2 = document.getElementById("data2"),
 	btn = document.getElementById("btn-send");

 btn.addEventListener("click", ()=>{

 		data.textContent = "Cargando.";
 		data2.textContent = "Cargando.";

 		var http = new XMLHttpRequest();
 		var http2 = new XMLHttpRequest();
 		let iterator = 0;

 		let intervaloTime = setInterval(()=>{
 			iterator++;

 			data2.textContent += ".";
 			data.textContent += ".";

 			if(iterator >= 2){
 				clearInterval(intervaloTime);
 			}

 		}, 500)

 			http.open("GET", "data.html");
 			http2.open("GET", "data2.html");
 			
 		setTimeout(()=>{
 			http.send();
 			http2.send();
 		}, 1000);

		http.addEventListener("load", loaded, false);
 		http2.addEventListener("load", loaded2, false);

 			function loaded(e){
 				data.innerHTML = e.target.responseText;
 			}

 			 function loaded2(e){
 				data2.innerHTML = e.target.responseText;
 			}

 })









 
let data =document.getElementById("data");
 	// data2 = document.getElementById("data2"),
 let btn = document.getElementById("btn-send");
 let cancel = document.getElementById("btn-send-2");

 btn.addEventListener("click", ()=>{

 	 	data.innerHTML = ""
 		data.textContent = "actualizando.";
 		// data2.textContent = "Cargando.";

 		var http = new XMLHttpRequest();
 		 
 		// var http2 = new XMLHttpRequest();
 		// let iterator = 0;
 
 		// let intervaloTime = setInterval(()=>{
 		// 	iterator++;

 		// 	// data2.textContent += ".";
 		// 	data.textContent += ".";

 		// 	if(iterator >= 2){
 		// 		clearInterval(intervaloTime);
 		// 	}

 		// }, 500)

 			http.open("GET", "json.json", true);
 			// http2.open("GET", "data2.html");
 			console.log(http.readyState)

 			setTimeout(()=>{
 				http.send();
 				data.textContent = "";
 			// http2.send();
 			}, 1000);//1000
 			console.log(http.readyState)
 
		http.addEventListener("load", loaded, false);
 		// http2.addEventListener("load", loaded2, false);
		console.log(http.status)
 			function loaded(e){
 				let js = JSON.parse(e.target.responseText);
 				
 				 	 
 		 	
 		 		for(let k=0; k<js.length; k++){



 				let container = document.createElement("div"),
 					fragment = document.createDocumentFragment(),
 				 	h1 = document.createElement("h1"),
 				 	h4 = document.createElement("h4"),
 				 	desc = document.createElement("p"),
 				 	main = document.createElement("strong");
 				 	time = document.createElement("p"),
 				 	timeNow = new Date();
 				 	container.setAttribute("class", "container");
 				 	 
 				 	h1.innerHTML = js[k].name;
 				 	container.appendChild(h1)

 				 	h4.innerHTML = js[k].version;
 				 	container.appendChild(h4)

 				 	desc.innerHTML = js[k].description;
 				 	container.appendChild(desc)

 				 	main.innerHTML = js[k].main;
 				 	container.appendChild(main)

 				 	time.innerHTML = timeNow;
 				 	container.appendChild(time)
 				 	
 			 
 				 	data.appendChild(container);
 				 	}
 					

 			}
		
 			//  function loaded2(e){
 			// 	data2.innerHTML = e.target.responseText;
 			// }
 			cancel.addEventListener("click", ()=>{
 				http.abort();
 				data.textContent = "No hay datos para mostrar";
 			})

			 
})



 
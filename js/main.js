// Manuelno unosenje
//kolona a 
const a1 = "sat"
const a2 = "dan"
const a3 = "nedelja"
const a4 = "mesec"
const resenje_a = "godina"

//kolona b
const b1 = "10"
const b2 = "0"
const b3 = "1"
const b4 = "1001"
const resenje_b = "2019"

//kolona c 
const c1 = "radost"
const c2 = "slavlje"
const c3 = "torta"
const c4 = "cevapi"
const resenje_c = "sreca"

//kolona d 
const d1 = "servis"
const d2 = "radi"
const d3 = "folija"
const d4 = "kutija"
const resenje_d = "novo"

//konacno 
const konacno = "srecna nova 2019 godina"



// function unesi(){
// 	var a1 = document.getElementById(basic-a1).value;
// 	var a2 = document.getElementById(basic-a2).value;
// 	var a3 = document.getElementById(basic-a3).value;
	
// }




function otkrij(id, resenje){
	document.getElementById(id).innerHTML = resenje;
}

function pogodi(id, resenje){
	odgovor = prompt("Unesi odgovor:");
	if(odgovor === resenje){
		document.getElementById(id).innerHTML = resenje;
	} else {
		alert("Odgovor nije tačan...")
	}
}




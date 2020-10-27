//Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.


// let angle = 0 //->12:00
// let angle = 90//->03:00
// let angle = 180//->06:00
// let angle = 270//09:00
// let angle = 360//->12:00
let angle = 40//// Expected: '01:20'


// let angle = 45// Expected: '01:30', instead got: '1.5:00'



var whatTimeIsIt = function(angle) {
  // Your code here
  let res = ""
  let hrs = ""
  let mins = "00"


    hrs = angle / 30


	//si obtenemos decimales
	if (!(Math.trunc(hrs)==hrs)) {
		// separar remanente
		let remanente = hrs - Math.trunc(hrs)
		hrs = hrs-remanente
		//multiplicar por 60
		remanente=remanente * 60
		//rerdondear hacia arrriba
		mins = Math.ceil(remanente);
	}


	//colocar en mins
  if (hrs.toString().length < 2) {
		hrs = "0"+hrs.toString()

  }
  if (mins.toString().length < 2) {
		mins = "0"+mins.toString()

  }



  res = hrs + ":" + mins
	console.log(res);
  return res;
}




whatTimeIsIt(angle)

// console.log(  "hand angle: (12,0) = " + clock_angles( 3, 0));
// console.log(  "hand angle: (10,10) = " + clock_angles( 10, 10 ));
// console.log(  "hand angle: (7,10) = " + clock_angles( 7, 10 ));
// console.log(  "hand angle: (12,59) = " + clock_angles( 12, 59 ));

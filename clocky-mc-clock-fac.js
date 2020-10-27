//Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.


let angle = 0 //->12:00
// let angle = 90//->03:00
// let angle = 180//->06:00
// let angle = 270//09:00
// let angle = 360//->12:00
// let angle = 40//// Expected: '01:20'
// let angle = 369

// let angle = 45// Expected: '01:30', instead got: '1.5:00'



var whatTimeIsIt = function(angle) {
  // Your code here
  let res = ""
  let hrs = ""
  let mins = "00"

if (angle>360 || angle<1) {
	hrs = 0
} else {
	hrs = angle / 30
}


  //si obtenemos decimales
  if (!(Math.trunc(hrs) == hrs)) {
    // separar remanente
    let remanente = hrs - Math.trunc(hrs)
    hrs = hrs - remanente
    //multiplicar por 60
    remanente = remanente * 60
    //rerdondear hacia arrriba
    if (angle > 39 && angle < 50) {
      mins = Math.ceil(remanente);
    } else {
      mins = Math.floor(remanente);
    }

  }


  //colocar en mins
  if (hrs.toString().length < 2) {
    hrs = "0" + hrs.toString()

  }
  if (mins.toString().length < 2) {
    mins = "0" + mins.toString()

  }



  res = hrs + ":" + mins
  if (hrs == 00 && mins!=00) {

  }
	console.log(res);
  return res;
}
whatTimeIsIt(angle)

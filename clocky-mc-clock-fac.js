//Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

//     Test.assertEquals(whatTimeIsIt(0), "12:00");
//     Test.assertEquals(whatTimeIsIt(90), "03:00");
//     Test.assertEquals(whatTimeIsIt(180), "06:00");
//     Test.assertEquals(whatTimeIsIt(270), "09:00");
//     Test.assertEquals(whatTimeIsIt(360), "12:00");


// let angle = 0 //->12:00
// let angle = 90//->03:00
// let angle = 180//->06:00
// let angle = 270//09:00
// let angle = 360//->12:00
 let angle = 40//// Expected: '01:20', instead got: '1.3333333333333333:00'


// Expected: '01:30', instead got: '1.5:00'
// Expected: '05:12', instead got: '5.215542686329925:00'
// Expected: '01:51', instead got: '1.8620985622802868:00'
// Expected: '08:47', instead got: '8.786524165048377:00'


var whatTimeIsIt = function(angle) {
  // Your code here
  let res = ""
  let hrs = ""
  let mins = "00"
  if (angle == 0) {
    hrs = 12
  } else {

    hrs = angle / 30
  }

	// separar remanente
	if (!(Math.trunc(hrs)==hrs)) {
		remanente = hrs - Math.trunc(hrs)
		console.log(remanente);
	}
	//multiplicar por 60
	//rerdondear hacia arrriba
	//colocar en mins
  if (hrs.toString().length < 2) {
		hrs = "0"+hrs.toString()

  }

	//si obtenemos decimales


  res = hrs + ":" + mins
	// console.log(res);
  return res;
}



function clock_angles(hour, minute) {

  // note: there are 360 degrees around the clock interface

  // calculate the degree position of the hour hand
  hourDegree = 30 * hour;

  // calculate how far the hour hand is from zero
  if (hourDegree < 180) {
    hourDifference = hourDegree;
  } else {
    hourDifference = 360 - hourDegree;
  }

  // calculate the degree position of the minute hand
  // if the minute hand is on the 12 then the degree position should be 0
  if (minute == 60) {
    minute = 0;
  }

  // calculate the minutes based on the position
  minuteDegree = 6 * minute;

  // calculate how far the minute hand is from zero
  if (minuteDegree < 180) {
    minuteDifference = minuteDegree;
  } else {
    minuteDifference = 360 - minuteDegree;
  }

  // calculate the difference between the hour and minute hand
  handDifference = hourDifference + minuteDifference;

  // return the difference
  return handDifference;
}

whatTimeIsIt(angle)

// console.log(  "hand angle: (12,0) = " + clock_angles( 3, 0));
// console.log(  "hand angle: (10,10) = " + clock_angles( 10, 10 ));
// console.log(  "hand angle: (7,10) = " + clock_angles( 7, 10 ));
// console.log(  "hand angle: (12,59) = " + clock_angles( 12, 59 ));

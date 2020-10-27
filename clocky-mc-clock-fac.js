//Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

//     Test.assertEquals(whatTimeIsIt(0), "12:00");
//     Test.assertEquals(whatTimeIsIt(90), "03:00");
//     Test.assertEquals(whatTimeIsIt(180), "06:00");
//     Test.assertEquals(whatTimeIsIt(270), "09:00");
//     Test.assertEquals(whatTimeIsIt(360), "12:00");

// 12:00 <= 0 degrees
// 03:00 <= 90 degrees
// 06:00 <= 180 degrees
// 09:00 <= 270 degrees
// 12:00 <= 360 degrees
// let angle = 0
let angle = 90
// let angle = 180
// let angle = 270
// let angle = 360

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

  if (hrs.toString().length < 2) {
		hrs = "0"+hrs.toString()
		console.log(hrs);
  }



  res = hrs + ":" + mins
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

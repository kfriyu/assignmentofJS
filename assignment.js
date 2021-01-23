 //Assignment-3

 // Task-1 
 function kilometerToMeter(kilometer){

   var meter = kilometer/1000;
   return meter;

}
var Iwalk= kilometerToMeter(300);
console.log(Iwalk);
var Wewalk= kilometerToMeter(200);
console.log(Wewalk);


//Task-2
function budgetCalculator(watch, phone, laptop){
  var total= (watch*50)+(phone*100)+(laptop*500);
  return total;

}

var budget= budgetCalculator(10, 10, 10);
console.log(budget)
 

//Task-3
function hotelCost(day){
  var stay = 0;
  if(day<=10){
      var 1st10Days = day*100;
  }
  else if(day<=20){
      var 1st10Days = 10*100;
      var remainingDays = day - 10;
      var 2nd10Days = remainingDays*80;
      var stay = 1st10Days + 2nd10Days;
  }
  else{
      var 1st10Days = 10*100;
      var 2nd10Days = 10*80;
      var remainingDays = day - 20;
      var otherDays = remainingDays*50;
      var stay = 1st10Days + 2nd10Days + otherDays;
  }
  return stay;

}

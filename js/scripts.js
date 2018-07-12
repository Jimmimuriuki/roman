$(document).ready(function() {
  $("form.roman").submit(function(event) {
  event.preventDefault();
   var num = parseInt($("input.rnum").val());

   var result = convertToRoman(num);
   $(".result").text(result);
   console.log(num);


});
});






//business logic
function convertToRoman(num) {
  var roman = "";
 var romanToNum = {
   M: 1000,
   CM:900,
   D:500,
   CD:400,
   C:100,
   XC:90,
   L:50,
   XL:40,
   X:10,
   IX:9,
    V:5,
    IV:4,
    I:1,
 };

 // var romanNumber = function convertToRoman(num){
 var roman = "";
 for(var key in romanToNum) {

 //   console.log("key: ",key)
 //   console.log("value: ", romanToNum[key]);
 // }
   while(num >=romanToNum[key]) {
     roman += key;
     num -= romanToNum[key];
     console.log("Num is decreased: ", num)
     // $("p.display").text(roman);


  };
 };
 return roman;
};








// convertToRoman(78);

// fact list key feature on home page
// list of facts 

var factList = [
  "One-third of US schools are composed primarily of either low-income black and/or Hispanic students or affluent, white students.",/*0*/
  "The average black or Hispanic student attends a school where about two-thirds of classmates are low-income.",/*1*/
  "Between 1990 and 2011, over half the 483 districts under desegregation orders saw court oversight lifted, and segregation in those districts increased.",/*2*/
  "The subsidized relocation of whites to suburbs and prohibited similar relocation of blacks by the federal government is responsible for increased school segregation.", "Most school segregation is between school districts rather than within schools in the same district.","In 1849, the Massachusetts Supreme Court ruled that segregated schools were allowed under the Constitution of Massachusetts (Roberts v. City of Boston).","88% of public school teachers are white.","Latino students never experienced any decrease in segregation at all. In fact, segregation of Latino students has only increased over time.","63% of all white students go to schools that are 90% to 100% white.","In New York state, the richest school district spent $38,572 per student in 1992. That’s seven times what the poorest district spent— $5,423. In Illinois, the ratio was 8 to 1. In Texas, per-student spending ranged from $3,098 to more than 10 times as much—$42,000."];/*3*/

//get facts by id 

var fact1 = document.getElementById("fact");
var myButton = document.getElementById("factgen");
var count = 0;

//when button is clicked
myButton.addEventListener("click", displayFact);

//function to display fact
function displayFact(){
  fact1.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


//key feature personalize it

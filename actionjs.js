
//create variables and get by id 


var lettertoCongress = document.getElementById("letterCongress");
var letterButton = document.getElementById("letterbutton");

letterButton.addEventListener("click",letterGenerator);


function letterGenerator() {
  console.log("hello");
  var name = document.getElementById("name1").value;
  var state = document.getElementById("state1").value;
  var age = document.getElementById("age1").value;
  var importance = document.getElementById("importance1").value;
  
  lettertoCongress.innerHTML = "Dear Congress Member, We, the students, reclaim our right to racially integrate schools through admission policies, fairly allocated resources and opportunities, culturally responsive curriculum and professional development for educators, restorative responses to conflict that disrupt school to prison pipeline, and representation of our diverse communities through school faculty and leaders. As a " + age + " year old from " + state + ", I, "+name+", ask you to create and support policies against school segregation of all sorts. "+importance+ " Thank you for your time.";
}


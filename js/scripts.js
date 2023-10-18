window.onload = function(){
 let form = document.querySelector("form");
 form.onsubmit = function(event) {
  event.preventDefault();
  document.getElementById("elephant").setAttribute("class","hidden");
  document.getElementById("frog").setAttribute("class","hidden");
  document.getElementById("jackalope").setAttribute("class","hidden");
  document.getElementById("doh").setAttribute("class","hidden");
  
  const animal1Input = document.getElementById("animal1Input").value;

    if (animal1Input === "elephant") {
        document.getElementById("elephant").removeAttribute("class");

    } else if (animal1Input === "frog") {
        document.getElementById("frog").removeAttribute("class");

    } else if (animal1Input === "jackalope") {
        document.getElementById("jackalope").removeAttribute("class");

    } else {
        document.getElementById("doh").removeAttribute("class");
    }
 } 

  
  
}

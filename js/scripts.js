function animal(){
 let form = document.querySelector("form");
 form.onsubmit = function(event){
  event.preventDefault();

  const animal1Input = document.getElementById("animal1Input").value;

    if (animal1Input === "elephant") {
        document.getElementById("frog").removeAttribute("class");
        document.getElementById("jackalope").removeAttribute("class");
        document.getElementById("doh").removeAttribute("class");

    } else if (animal1Input === "frog") {
        document.getElementById("elephant").removeAttribute("class");
        document.getElementById("jackalope").removeAttribute("class");
        document.getElementById("doh").removeAttribute("class");

    } else if (animal1Input === "jackalope") {
        document.getElementById("frog").removeAttribute("class");
        document.getElementById("elephhant").removeAttribute("class");
        document.getElementById("doh").removeAttribute("class");

    } else {
        document.getElementById("frog").removeAttribute("class");
        document.getElementById("jackalope").removeAttribute("class");
        document.getElementById("elephant").removeAttribute("class");
    }
 }

}
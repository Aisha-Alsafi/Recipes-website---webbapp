//var namn= "Aisha";
//localStorage.setItem("Namn",namn)
//alert(localStorage.getItem("Namn"))
//  localStorage.getItem("Namn")
//  localStorage.removeItem("Namn")


function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if(name.length < 5){
        text = "Du måste ange (Namn), minst 5 bokstaver" ;
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Fältet E-post är obligatorisk";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 20){
        text = "Ditt meddelande måste vara minst 20 bokstäver";
        error_message.innerHTML = text;
        return false;
    }

     // loacalStorage det ta användare namn (SetItem) och sen visa name på alert meddelanse (getItem)
    localStorage.setItem("username",name);
    alert("Tack "+localStorage.getItem("username")+" ! Ditt meddelande har skickats");
    return true;


}

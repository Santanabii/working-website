
document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();


    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    
    
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    showData();

});


function showData(){

    let name = localStorage.getItem("name");
    let age = localStorage.getItem("age");

   
    document.getElementById("greeting").innerHTML =
    `Hello ${name}! Welcome.`;

    
    let months = age * 12;

    document.getElementById("months").innerHTML =
    `You are ${months} months old.`

    
    if(age >= 18){
        document.getElementById("adult").innerHTML =
        "You can access adult content.";
    }
    else{
        document.getElementById("adult").innerHTML =
        "You are too young for adult content.";
    }

    
    let quotes = ["Keep working hard and never give up",
    "Small progress is still progress.",
    "Believe in yourself and keep going.",
    "Your future is created by what you do today."]
    ;

    let text = "";

    for(let i = 0; i < quotes.length; i++){
        text += "<p>" + quotes[i] + "</p>";
    }

    document.getElementById("quotes").innerHTML = text;

}



showData();
var d = document.getElementById("first");
d.tabIndex = -1;//getting element in focus
d.focus();

//    d.onkeydown = function(e){
//        console.log(e);
// }
//    d.onkeypress = function(e){
//               console.log(e);
//    }

d.onkeydown = function(e){
    var ceyCode = e.key;
    switch (ceyCode){
        case "r": d.style.backgroundColor = "red"; break;
        case "g": d.style.backgroundColor = "green"; break;
        case "b": d.style.backgroundColor = "blue"; break;
        case "Escape": d.style.display = "none"; break;
        case "Enter": d.innerHTML = "Ma?"; break;
    }

}
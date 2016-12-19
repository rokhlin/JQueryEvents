
document.getElementById("target").addEventListener("click", function(){
    document.getElementById("first").classList.add("r");
});
document.getElementById("target").addEventListener("click", function(){
    document.getElementById("second").classList.add("r");
});

document.getElementById("target").onclick = function(){
    document.getElementById("second").classList.add("border");
}

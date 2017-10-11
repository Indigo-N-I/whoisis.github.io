var i = 0;
function showAci() {
    i++;
    var x = document.getElementById("academics");
    var y =document.getElementById("academics1");
    var z =document.getElementById("academics2");
    var w = document.getElementById("academics3");
    if(i%2 ==1){
        document.getElementById("fuck").innerText = "Hide Achievements";
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
        w.style.display = "block";
        document.getElementById("fuck").style.color = "#222";
    }
    if(i%2 == 0){
        document.getElementById("fuck").innerText = "Show Achievements";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        w.style.display = "none";
        document.getElementById("fuck").style.color = "#FFF";
    }

}
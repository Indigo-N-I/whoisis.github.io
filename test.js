var i = 0;
function showAci() {
    i++;
    var x = document.getElementById("academics");
    var y =document.getElementById("academics1");
    var z =document.getElementById("academics2");
    var w = document.getElementById("academics3");
    if(i%2 ==1){
        document.getElementById("fuck").innerText = "Hide Achievements";
        x.style.visibility = "visible";
        y.style.visibility = "visible";
        z.style.visibility = "visible";
        w.style.visibility = "visible";
    }
    if(i%2 == 0){
        document.getElementById("fuck").innerText = "Show Achievements";
        x.style.visibility = "hidden";
        y.style.visibility = "hidden";
        z.style.visibility = "hidden";
        w.style.visibility = "hidden";
    }
}
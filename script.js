var css = document.querySelector("h3");
var color1 = document.querySelector("#color-1");
var color2 = document.querySelector("#color-2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", "+ color2.value +")";
    document.getElementById("color_text").textContent = body.style.background;
}
setGradient()
color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)
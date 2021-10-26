var classBTNA = document.getElementById("classBTNA");
var classBTNB = document.getElementById("classBTNB");
classBTNA.addEventListener('click', function () {
    console.log("ClassA Clicked!");
    window.open("Classes/Technologia.html", "_self");
});
classBTNB.addEventListener('click', function () {
    console.log("ClassB Clicked");
    window.open("Classes/Alla.html", "_self");
});
console.log("schoolSelector Script loaded!");

var documentBTN20211025 = document.getElementById("documentBTN20211025");
var documentBTN20211128 = document.getElementById("documentBTN20211128");
documentBTN20211025.addEventListener('click', function () {
    console.log("documentBTN20211025 Clicked!");
    window.open("Documents/Technologia/20211025.html", "_self");
});
documentBTN20211128.addEventListener('click', function () {
    console.log("documentBTN20211128 Clicked!");
    window.open("Document/Technologia/20211128.html", "_self");
});
console.log("technologiaSelector Script loaded!");

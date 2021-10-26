const documentBTN20211025 = document.getElementById("documentBTN20211025") as HTMLButtonElement;

documentBTN20211025.addEventListener('click', ()=>{
    console.log("documentBTN20211025 Clicked!");
    window.open("Documents/Technologia/20211025.html", "_self");
});

console.log("technologiaSelector Script loaded!");
const classBTNA = document.getElementById("classBTNA") as HTMLButtonElement;
const classBTNB = document.getElementById("classBTNB") as HTMLButtonElement;

classBTNA.addEventListener('click', ()=>{
    console.log("ClassA Clicked!");
    window.open("Classes/Technologia.html", "_self");
});

classBTNB.addEventListener('click', ()=>{
    console.log("ClassB Clicked");
    window.open("Classes/Alla.html", "_self");
})

console.log("schoolSelector Script loaded!");
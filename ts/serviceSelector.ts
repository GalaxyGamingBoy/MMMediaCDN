const serviceBTNA = document.getElementById("serviceBTNA") as HTMLButtonElement;
/*
const serviceBTNB = document.getElementById("serviceBTNB") as HTMLButtonElement;
const serviceBTNC = document.getElementById("serviceBTNC") as HTMLButtonElement;
*/

serviceBTNA.addEventListener('click', ()=>{
    console.log("School Clicked!");
    window.open("Services/School.html", "_self");
});

/*
serviceBTNB.addEventListener('click', ()=>{
    console.log("Service B Clicked!");
})

serviceBTNC.addEventListener('click', ()=>{
    console.log("Service C Clicked");
})
*/

console.log("serviceSelector Script loaded!");
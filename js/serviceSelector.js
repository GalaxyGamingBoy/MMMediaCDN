var serviceBTNA = document.getElementById("serviceBTNA");
/*
const serviceBTNB = document.getElementById("serviceBTNB") as HTMLButtonElement;
const serviceBTNC = document.getElementById("serviceBTNC") as HTMLButtonElement;
*/
serviceBTNA.addEventListener('click', function () {
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

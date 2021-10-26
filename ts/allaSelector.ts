const timetable = document.getElementById("timetable") as HTMLButtonElement;

timetable.addEventListener('click', ()=>{
    console.log("documentBTN20211025 Clicked!");
    window.open("Documents/Alla/Timetable.html", "_self");
});

console.log("allaSelector Script loaded!");
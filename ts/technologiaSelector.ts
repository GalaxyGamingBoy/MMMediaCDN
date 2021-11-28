const documentBTN20211025 = document.getElementById(
  "documentBTN20211025"
) as HTMLButtonElement;
const documentBTN20211128 = document.getElementById(
  "documentBTN20211128"
) as HTMLButtonElement;

documentBTN20211025.addEventListener("click", () => {
  console.log("documentBTN20211025 Clicked!");
  window.open("Documents/Technologia/20211025.html", "_self");
});

documentBTN20211128.addEventListener("click", () => {
  console.log("documentBTN20211128 Clicked!");
  window.open("Documents/Technologia/20211128.html", "_self");
});

console.log("technologiaSelector Script loaded!");

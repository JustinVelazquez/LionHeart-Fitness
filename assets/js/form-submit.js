const scriptURL =
  "https://script.google.com/macros/s/AKfycbwR5OIe9xE_vS6JjPgRSlXx-hWHTEG9SulHEoDD_ECIBcq230pH/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));

  alert("Submitted")  ;
});

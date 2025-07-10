function showDate() {
  const today = new Date().toDateString();
  document.getElementById("date-display").textContent = `Today's date is ${today}`;
}

function contactMe() {
  alert("Thanks for reaching out! You can contact me on LinkedIn or GitHub.");
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
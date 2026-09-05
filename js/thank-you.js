// Fire the Meta Lead event only for a genuine successful submission.
document.addEventListener("DOMContentLoaded", function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  if (sessionStorage.getItem("contact_submitted") === "1") {
    sessionStorage.removeItem("contact_submitted");
    if (typeof window.trackLead === "function") window.trackLead();
  }
});

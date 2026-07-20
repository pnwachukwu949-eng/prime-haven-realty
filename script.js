// Prime Haven Realty interactions

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Thank you for your interest. A Prime Haven Realty agent will contact you shortly.");
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Your enquiry has been received. We will contact you soon.");

  form.reset();
});
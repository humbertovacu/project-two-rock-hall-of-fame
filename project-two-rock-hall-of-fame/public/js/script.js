// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("project-two-rock-hall-of-fame JS imported successfully!");
});

document.getElementById('add-band').addEventListener('click', () => {
  const bandLabel = document.getElementById("add-band-label");
  const newBandInput = document.createElement('input');
  newBandInput.setAttribute('type', 'text')
  newBandInput.setAttribute('name', 'bands')
  bandLabel.appendChild(newBandInput)
})




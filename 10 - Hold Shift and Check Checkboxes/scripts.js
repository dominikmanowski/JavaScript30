const checkboxes = inbox.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let isInBetween = false;
  if (e.shiftKey && this.checked)
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        isInBetween = !isInBetween;
      }
      if (isInBetween) {
        checkbox.checked = true;
      }
    });

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

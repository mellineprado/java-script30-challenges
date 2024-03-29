const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

const handleCheck = (e) => {
  let inBetween = false;
  // check if the shift key is down
  // AND check that they are checking it
  if (e.shiftKey && e.currentTarget.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === e.currentTarget || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = e.currentTarget;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
  const suffix = e.currentTarget.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.currentTarget.name}`, e.currentTarget.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

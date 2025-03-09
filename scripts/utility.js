document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');

const setElementById = (id, valueInput) => {
  document.getElementById(id).textContent = valueInput.toFixed(2);
}
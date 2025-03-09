document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");

const setElementById = (id, valueInput) => {
  document.getElementById(id).textContent = valueInput.toFixed(2);
};


const hideElementById = (id) => {
  document.getElementById(id).classList.add('hidden')
}
const showElementById = (id) => {
  document.getElementById(id).classList.remove('hidden')
}


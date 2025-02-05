

const html = document.getElementsByTagName("html")[0];
html.setAttribute("data-theme", "light");

document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

function inputValueGetById(elementId) {
  return Number(document.getElementById(elementId).value);
}

function numberGetByText(elementId) {
  return Number(document.getElementById(elementId).innerText);
}

function setElementById(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

function hideElementById(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

function showElementById(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

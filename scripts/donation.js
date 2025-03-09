const totalBudget = document.getElementById("total-budget");

const donateAllBtn = document.querySelectorAll(".donate-btn");
donateAllBtn.forEach((donateBtn) => {
  donateBtn.addEventListener("click", () => {
    handleDonate(donateBtn);
  });
});

const updateBudget = (inputValue) => {
  const budget = parseFloat(totalBudget.textContent);

  setElementById("total-budget", budget - inputValue);
};

document.getElementById("history-btn").addEventListener("click", () => {
  document
    .getElementById("donation-btn")
    .classList.remove("bg-btn-color", "hover:bg-btn-color");
  document
    .getElementById("history-btn")
    .classList.add("bg-btn-color", "hover:bg-btn-color");
  showElementById("history-section");
  hideElementById("card-section");
});
document.getElementById("donation-btn").addEventListener("click", () => {
  document
    .getElementById("history-btn")
    .classList.remove("bg-btn-color", "hover:bg-btn-color");
  document
    .getElementById("donation-btn")
    .classList.add("bg-btn-color", "hover:bg-btn-color");
  hideElementById("history-section");
  showElementById("card-section");
});

const addToDonationHistory = (title, amount) => {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const dayOfMonth = date.getDate();
  const currentTime = new Date().toLocaleTimeString();
  const newYear = new Date().getFullYear();
  const historySection = document.getElementById("donation-section");
  const historyData = document.createElement("div");
  historyData.className = `border p-4 rounded-lg shadow-lg`;
  historyData.innerHTML = `
  <h3 class="font-bold text-lg">${title}</h3>
  <p class="text-gray-600 text-medium text-[17px]">Donation: ${amount} TK.</p>
  <p class="text-gray-600 opacity-60">Date: ${day}, ${month} ${dayOfMonth}, ${newYear} ${currentTime}</p>
  `;
  historySection.appendChild(historyData);
};

const handleDonate = (btn) => {
  const card = btn.closest(".card");
  const cardTitle = card.querySelector(".card-title").textContent;
  const donateAmountValue = parseFloat(card.querySelector(".input").value);
  if (isNaN(donateAmountValue) || donateAmountValue < 0) {
    alert("Should be Valid");
    return;
  }

  if (totalBudget.textContent < donateAmountValue) {
    alert("You are out of your budget");
    return;
  }

  updateBudget(donateAmountValue);
  const totalCollection = parseFloat(
    card.querySelector(".total-collection").textContent
  );
  card.querySelector(".total-collection").textContent = (
    totalCollection + donateAmountValue
  ).toFixed(2);
  my_modal_1.showModal();

  addToDonationHistory(cardTitle, donateAmountValue);

  card.querySelector(".input").value = "";
};

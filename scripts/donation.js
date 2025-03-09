const totalBudget = document.getElementById("total-budget");

const donateAllBtn = document.querySelectorAll(".donate-btn");
donateAllBtn.forEach((donateBtn) => {
  donateBtn.addEventListener("click", () => {
    handleDonate(donateBtn);
  });
});

const updateBudget = (inputValue) => {
  const budget = parseFloat(totalBudget.textContent);

  setElementById("total-budget", budget + inputValue);
};

const handleDonate = (btn) => {
  const card = btn.closest(".card");
  const donateAmountValue = parseFloat(card.querySelector(".input").value);
  if (isNaN(donateAmountValue) || donateAmountValue < 0) {
    alert("Should be Valid");
    return;
  }
  updateBudget(donateAmountValue);
  const totalCollection = parseFloat(
    card.querySelector(".total-collection").textContent
  );
  card.querySelector(".total-collection").textContent = (
    totalCollection + donateAmountValue
  ).toFixed(2);

  card.querySelector(".input").value = "";
};

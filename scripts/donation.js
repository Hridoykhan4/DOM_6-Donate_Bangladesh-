document.getElementById("donate-btn-1").addEventListener("click", function () {
  const donation = inputValueGetById("donation-input-1");
  if (isNaN(donation) || donation <= 0) {
    alert("Invalid Donation Amount");
    return;
  } else {
    my_modal_1.showModal();
  }

  const totalcollection = numberGetByText("total-collection");
  document.getElementById("total-collection").innerText =
    totalcollection + donation;

  const availableBalance = numberGetByText("total-budget");

  const remainingBalance = availableBalance - donation;

  if (remainingBalance < 0) {
    window.location.reload();
  }

  setElementById("total-budget", remainingBalance);

  const donationSection = document.getElementById("donation-section");
  const div = document.createElement("div");
  div.classList = "bg-white rounded-md text-black p-3 border-2 border-gray-500";

  const date = new Date();

  const day = date.toLocaleDateString("en-US", { weekday: "short" });

  const month = date.toLocaleDateString("en-US", { month: "short" });

  const dayOfMonth = date.getDate();

  const currentTime = new Date().toLocaleTimeString();

  const newYear = new Date().getFullYear();
  const p = document.createElement("p");
  p.innerHTML = `
  <p>${donation} Taka is Donated for Flood at Noakhali,Bangladesh</p>
  <p class="bg-gray-800 p-2 bg-opacity-10">Date: ${day}, ${month} ${dayOfMonth}, ${newYear} ${currentTime}</p>
  `;

  div.appendChild(p);
  donationSection.appendChild(div);
  document.getElementById("donation-input-1").value = "";
});

document.getElementById("donate-btn-2").addEventListener("click", function () {
  const donation = inputValueGetById("donation-input-2");
  if (isNaN(donation) || donation <= 0) {
    alert("Invalid Donation Amount");
    return;
  }

  const totalcollection2 = numberGetByText("total-collection-feni");
  document.getElementById("total-collection-feni").innerText =
    totalcollection2 + donation;

  const availableBalance = numberGetByText("total-budget");
  const remainingBalance = availableBalance - donation;

  if (remainingBalance < 0) {
    window.location.reload();
  }
  setElementById("total-budget", remainingBalance);

  const donationSection = document.getElementById("donation-section");
  const div = document.createElement("div");
  div.classList = "bg-white rounded-md text-black p-3 border-2 border-gray-500";

  const date = new Date();

  const day = date.toLocaleDateString("en-US", { weekday: "short" });

  const month = date.toLocaleDateString("en-US", { month: "short" });

  const dayOfMonth = date.getDate();

  const currentTime = new Date().toLocaleTimeString();

  const newYear = new Date().getFullYear();
  const p = document.createElement("p");
  p.innerHTML = `
  <p>${donation} Taka is Donated for Flood at Feni,Bangladesh</p>
  <p class="bg-gray-800 p-2 bg-opacity-10">Date: ${day}, ${month} ${dayOfMonth}, ${newYear} ${currentTime}</p>
  `;

  div.appendChild(p);
  donationSection.appendChild(div);
  document.getElementById("donation-input-2").value = "";
});

document.getElementById("donate-btn-3").addEventListener("click", function () {
  const donation = inputValueGetById("donation-input-3");
  if (isNaN(donation) || donation <= 0) {
    alert("Invalid Donation Amount");
    return;
  }

  const totalcollection3 = numberGetByText("total-collection-quota");
  document.getElementById("total-collection-quota").innerText =
    totalcollection3 + donation;

  const availableBalance = numberGetByText("total-budget");
  const remainingBalance = availableBalance - donation;
  if (remainingBalance < 0) {
    window.location.reload();
  }
  setElementById("total-budget", remainingBalance);

  const donationSection = document.getElementById("donation-section");
  const div = document.createElement("div");
  div.classList = "bg-white rounded-md text-black p-3 border-2 border-gray-500";

  const date = new Date();

  const day = date.toLocaleDateString("en-US", { weekday: "short" });

  const month = date.toLocaleDateString("en-US", { month: "short" });

  const dayOfMonth = date.getDate();

  const currentTime = new Date().toLocaleTimeString();

  const newYear = new Date().getFullYear();
  const p = document.createElement("p");
  p.innerHTML = `
  <p>${donation} Taka is Donated for the Injures in the Quota Movement</p>
  <p class="bg-gray-800 p-2 bg-opacity-10">Date: ${day}, ${month} ${dayOfMonth}, ${newYear} ${currentTime}</p>
  `;

  div.appendChild(p);
  donationSection.appendChild(div);
  document.getElementById("donation-input-3").value = "";
});

const history = document.getElementById("history");
const donation = document.getElementById("donation");

document.getElementById("history").addEventListener("click", function () {
  hideElementById("card-section");
  showElementById("history-section");
  donation.classList.remove("bg-btn-color");
  history.classList.add("bg-btn-color");
  history.classList.remove("bg-gray-200");
});

document.getElementById("donation").addEventListener("click", function () {
  showElementById("card-section");
  hideElementById("history-section");

  donation.classList.add("bg-btn-color");
  history.classList.remove("bg-btn-color");
});

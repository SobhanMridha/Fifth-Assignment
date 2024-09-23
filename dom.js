// make donation page hidden
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("donation-page").classList.add("hidden");
  document.getElementById("history-page").classList.remove("hidden");
});

// make history page hidden
document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("history-page").classList.add("hidden");
  document.getElementById("donation-page").classList.remove("hidden");
});

// Donation function

document
  .getElementById("noakhali-donation")
  .addEventListener("click", function () {
    let amount = getDonationAmount("noakhali-donation-amount");

    if (amount == -1) {
      stopImmediatePropagation();
    }

    let total = findTotalDonation("noakhali-total-donation");

    let main_balance = findTotalDonation("available-balance");

    if (main_balance < amount) {
      alert("The amount cannot be donated");
    } else {

      total += amount;
      document.getElementById("noakhali-total-donation").innerText = total;

      main_balance -= amount;
      document.getElementById("available-balance").innerText = main_balance;

      
    }
  });

  
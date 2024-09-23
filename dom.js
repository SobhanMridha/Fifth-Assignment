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

// Noakhali donation

document
  .getElementById("noakhali-donation")
  .addEventListener("click", function () {
    let amount = getDonationAmount("noakhali-donation-amount");

    if (amount == -1) {
      stopImmediatePropagation();
    }

    donation("noakhali-total-donation", amount);
  });

//   Feni donation

document.getElementById("feni-donation").addEventListener("click", function () {
  let amount = getDonationAmount("feni-donation-amount");

  if (amount == -1) {
    stopImmediatePropagation();
  }

  donation("feni-total-donation", amount);
});

// Quota donation

document
  .getElementById("quota-donation")
  .addEventListener("click", function () {
    let amount = getDonationAmount("quota-donation-amount");

    if (amount == -1) {
      stopImmediatePropagation();
    }

    donation("quota-total-donation", amount);
  });

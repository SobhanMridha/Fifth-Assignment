// make donation page hidden
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("donation-page").classList.add("hidden");
  document.getElementById("history-page").classList.remove("hidden");
  document.getElementById("history-btn").classList.add("bg-[#B4F461]");
  document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
});

// make history page hidden
document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("history-page").classList.add("hidden");
  document.getElementById("donation-page").classList.remove("hidden");
  document.getElementById("donation-btn").classList.add("bg-[#B4F461]");
  document.getElementById("history-btn").classList.remove("bg-[#B4F461]");
});

// Noakhali donation

document
  .getElementById("noakhali-donation")
  .addEventListener("click", function () {
    let amount = getDonationAmount("noakhali-donation-amount");

    if (amount == -1) {
      stopImmediatePropagation();
    }

    donation(
      "noakhali-total-donation",
      amount,
      "Flood at Noakhali, Bangladesh."
    );

    document.getElementById("noakhali-donation-amount").value = "";
  });

//   Feni donation

document.getElementById("feni-donation").addEventListener("click", function () {
  let amount = getDonationAmount("feni-donation-amount");

  if (amount == -1) {
    stopImmediatePropagation();
  }

  donation("feni-total-donation", amount, "Flood Relief in Feni, Bangladesh.");

  document.getElementById("feni-donation-amount").value = "";
});

// Quota donation

document
  .getElementById("quota-donation")
  .addEventListener("click", function () {
    let amount = getDonationAmount("quota-donation-amount");

    if (amount == -1) {
      stopImmediatePropagation();
    }

    donation(
      "quota-total-donation",
      amount,
      "Injured in the Quota Movement, Bangladesh."
    );

    document.getElementById("quota-donation-amount").value = "";
  });

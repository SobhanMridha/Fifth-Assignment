// donation amount check

function getDonationAmount(id) {
  let money = document.getElementById(id).value;
  
  if (isNaN(money) || money === '') {
    alert("Invalid Donation Amount");
    return -1;
  }
  money = parseFloat(money);

  if (money < 0) {
    alert("Invalid Donation Amount");
    return -1;
  }

  return money;
}

// find total donation and total balace reduce funtion

function findTotalDonation(id) {
  let tk = document.getElementById(id).innerText;
  tk = parseFloat(tk);
  return tk;
}


// Donation function

function donation(id, amount) {
    let total = findTotalDonation(id);
  
    let main_balance = findTotalDonation("available-balance");
  
    if (main_balance < amount) {
      alert("The amount cannot be donated");
    } else {
      total += amount;
      document.getElementById(id).innerText = total;
  
      main_balance -= amount;
      document.getElementById("available-balance").innerText = main_balance;
    }
  }


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

function donation(id, amount, location) {
    let total = findTotalDonation(id);
  
    let main_balance = findTotalDonation("available-balance");
  
    if (main_balance < amount) {
      alert("The amount cannot be donated");
    } else {
      total += amount;
      document.getElementById(id).innerText = total;
  
      main_balance -= amount;
      document.getElementById("available-balance").innerText = main_balance;

    // history storing 
    
    let newDiv = document.createElement('div');
    let newH1 = document.createElement('h1');
    let newP = document.createElement('p');
    let data = new Date();

    newDiv.classList.add('p-8', 'border', 'rounded-2xl', 'sm:w-[900px]',
      'w-[90%]', 'mx-auto', 'my-6');
    newH1.classList.add('text-xl', 'font-bold', 'pb-4');
    newP.classList.add('text-base', 'text-[#111111B2]', 'font-light');
    
    newH1.innerText = amount + ' Taka is Donated for ' +  location;
    newP.innerText = 'Date : ' + data;
    
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);
    

    document.getElementById('history-page').appendChild(newDiv);
  }

}
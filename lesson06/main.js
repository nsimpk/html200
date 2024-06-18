function deposit(amount) {
    if (amount > 0){
      totalBalance += amount;
    }
}
function withdraw(amount) {
    if (amount <= totalBalance) {
        totalBalance -= amount;
    } else {
        console.log("Insufficient funds!");
        alert("Insufficient funds!");
    }
}
let totalBalance = 50;
function bankAppPrompt() {
    while (true) {
        let entry = prompt("Enter 'D' for deposit, 'W' for withdraw, 'B' to view balance, or 'Q' to quit:");
        if (entry == 'Q') {
            break;
        } else if (entry == 'B') {
            console.log(totalBalance);
            alert('Balance = '+totalBalance);
        } else if (entry == 'D') {
            let amount = prompt("Enter deposit amount:");
            if (amount > 0) {
                deposit(amount);
                console.log('Deposit processed New balance:'+ totalBalance);
                alert('Balance = '+totalBalance);
            } else {
                console.log("Invalid amount. Please enter a valid number.");
                alert("Invalid amount. Please enter a valid number.");
            }
        } else if (entry == 'W') {
            let amount = prompt("Enter withdrawal amount:");
            if (amount > 0) {
                withdraw(amount);
                console.log('Withdrawal processed New balance:'+ totalBalance);
                alert('Withdrawal processed New balance:'+ totalBalance);
            } else {
                console.log("Invalid amount. Please enter a valid number.");
                alert("Invalid amount. Please enter a valid number.")
            }
        } else {
            console.log("Invalid action. Please enter 'D', 'W', 'B' or 'Q'.");
            alert("Invalid action. Please enter 'D', 'W', 'B' or 'Q'.");
        }
    }
    console.log('Final balance' + totalBalance);
    alert('Final balance ' + totalBalance);
}

bankAppPrompt();
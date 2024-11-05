function minNotesCoins(amount) {
    const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let count = 0;

    for (let i = 0; i < denominations.length; i++) {
        count += Math.floor(amount / denominations[i]);
        amount %= denominations[i];
    }

    return count;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("atmForm");
    const amountInput = document.getElementById("amount");
    const totalInput = document.getElementById("total");
    const totalSection = document.getElementById("total-section"); 

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const amount = parseInt(amountInput.value);

        if (isNaN(amount) || amount <= 0) {
            totalInput.value = "Invalid amount"; 
        } else {
            const result = minNotesCoins(amount);
            totalInput.value = result; 
            totalSection.style.display = "block";
        }
    });
});
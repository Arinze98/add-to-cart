let plusEl = document.querySelectorAll('#plus')
let minusEl = document.querySelectorAll('#dash')
const quanEl = document.getElementById('quantity')
const amountEl = document.getElementById('total_amount')
const clearEl = document.getElementById('clear')
const totalQuantity = document.getElementById('total_quantity')
let priceEl = document.querySelectorAll('#price')

let count = 0
let items = [94, 37, 18, 82]
let newItem = []

for(let i = 0; i < plusEl.length; i++) {
    var plus = plusEl[i]
    var pri = priceEl[i]
    
    plus.addEventListener('click', (event)=> {
        var plusBtn = event.target
        var input = plusBtn.parentElement.children[1]
        var inputValue = input.value
        var newValue = parseInt(inputValue) + 1
        input.value = newValue

        // total amount
        count++ 
        totalQuantity.innerHTML = count

        // total price
        var total = newValue * items[i];
        newItem[i] = total;
        var getNewItem = newItem.reduce((acc, curr) => acc + curr, 0);
        amountEl.innerHTML = getNewItem

    })
}


for(let i = 0; i < minusEl.length; i++) {
    var minus = minusEl[i]
    
    minus.addEventListener('click', (event)=> {
        var minusBtn = event.target
        var input = minusBtn.parentElement.children[1]
        var inputValue = input.value
        var newValue = Math.max(0, parseInt(inputValue) - 1);
        input.value = newValue
      
        // total amount
        count = Math.max(0, count - 1);   
        totalQuantity.innerHTML = count

        // total price
        var total = newValue * items[i];
        newItem[i] = total;
        var getNewItem = newItem.reduce((acc, curr) => acc + curr, 0) - newValue
        amountEl.innerHTML = getNewItem

    })
}

// clear cart and price 
clearEl.addEventListener('click', () => {
    // Reset the newItem array
    newItem = [];
    
    // Reset the total quantity and total price
    count = 0;
    totalQuantity.innerHTML = count;
    amountEl.innerHTML = 0; // Assuming the initial total price is 0
    
    // Reset input values (if needed)
    let quantityInputs = document.querySelectorAll('#quantity');
    quantityInputs.forEach(input => {
        input.value = 0; // Set quantity input to 0
    });
});

// love action

// Select all elements with class 'bi-heart'
const heartIcons = document.querySelectorAll('.bi-heart')

heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Toggle between 'bi-heart' and 'bi-heart-fill' classes
        if (icon.classList.contains('bi-heart')) {
            icon.classList.remove('bi-heart');
            icon.classList.add('bi-heart-fill');
            icon.classList.add('text-red-700');
        } else if (icon.classList.contains('bi-heart-fill')) {
            icon.classList.remove('bi-heart-fill');
            icon.classList.add('bi-heart');
            icon.classList.remove('text-red-700');
        }
    });
});

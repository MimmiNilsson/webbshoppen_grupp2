// Declaring/defining variables
const balance = document.querySelector('#balance');
const moneyPlus = document.querySelector('#money-plus');
const moneyMinus = document.querySelector('#money-minus');
const list = document.querySelector('#list');
const form = document.querySelector('#form'); 
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');

 // Open array to add transactions to
let transactions = [];

// Adding transactions
function addTransaction(e) {
    e.preventDefault();

    if(text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a descriptive text and amount for your transaction before continuing.');
    } else {
        const transaction = {
        id: generateID(),
        text: text.value, 

// '+' infront of 'amount.value' turns string into a number
        amount: +amount.value
        };

        transactions.push(transaction);

        addTransactionDOM(transaction);

        updateValues();

// Clear input fields after submitting
        text.value = '';
        amount.value = '';
    }
    
}

// Generate ID by using random
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    // Get sign (income or expense, shorthanded here as if/then statement)
    const sign = transaction.amount < 0 ? '-' : '+';

    // Create new element
    const item = document.createElement('li');
   
    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)} </span> <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`;

    list.appendChild(item);
}

// Update balance (income and expense)
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);

    balance.innerText = `${total} SEK`;
    moneyPlus.innerText = `${income} SEK`;
    moneyMinus.innerText = `${expense} SEK`;
}

// Using ID to remove transaction
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    
    init();
}

// Init app
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();

// Event listener for submission
form.addEventListener('submit', addTransaction);



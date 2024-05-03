// Create a BankAccount class in JS which will have methods for depositing, withdrawing and checking the account balance using OOP principles

class BankAccount {
    constructor (accountHolder, initialBalance) {
        this.user = accountHolder
        this.balance = initialBalance
    }

    deposit (amount) {
        if(amount > 0) {
            this.balance += amount
            console.log(`Deposited Rs.${amount}. New balance: ${this.balance}`);
        } else {
            console.log(`Invalid deposit amount. Please enter a positive amount.`);
        }
    }

    withdraw (amount) {
        if(amount > 0){
            if(this.balance >= amount) {
                this.balance -= amount 
                console.log(`Withdrawn Rs.${amount}. New balance: Rs.${this.balance}`);
            } else {
                console.log(`Insufficient funds for withdrawal.`);
            }
        } else {
            console.log(`Invalid withdrawal amount. Please enter a positive amount.`);
        }
    }

    checkBalance () {
        console.log(`Account balance for ${this.user}: ${this.balance}`);
    }
}

const myAccount = new BankAccount('Mithun S', 1000);

myAccount.checkBalance();

myAccount.deposit(500);
myAccount.deposit(-50);

myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);

myAccount.checkBalance();
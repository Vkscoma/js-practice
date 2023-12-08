// Bank Account class
// properties: balance, accountHolder, accountNumber
// methods: deposit(amt), withdraw(amt)

class BankAccount {
    constructor(balance = 0, accountHolder, accountNumber) {
        if (typeof balance !== "number") {
            throw new Error("Balance must be a number");
        }
        this.balance = balance;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
    }
    depositToAccount(amt) {
        if (amt <= 0) {
            throw new Error("Deposit amount must be positive");
        } else {
            const newAccountValue = this.balance += amt
            console.log(`Your new balance is $${newAccountValue}`);
        }
    }
    withdrawFromAccount(amt) {
        if (amt <= this.balance) {
            const newBalance = this.balance -= amt
            console.log(`Your new balance is $${newBalance}`)
        }
        else {
            throw new Error("Insufficient funds");
        }
    }
}
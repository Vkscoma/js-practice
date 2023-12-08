// Bank Account class
// properties: balance, accountHolder, accountNumber
// methods: deposit(amt), withdraw(amt)

class BankAccount {
    constructor(balance = 0, accountHolder, accountNumber) {
        this.balance = balance;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
    }
    depositToAccount(amt) {
        return this.balance += amt
    }
    withdrawFromAccount(amt) {
        if (amt <= this.balance)
            return this.balance -= amt
        else {
            throw new Error("Insufficient funds");
        }
    }
}
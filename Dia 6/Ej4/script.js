class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Deposit amount must be greater than 0.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
          console.log("Insufficient funds.");
        }
      } else {
        console.log("Withdrawal amount must be greater than 0.");
      }
    }
  }
  
  const account1 = new BankAccount("123456789", 1000);
  const account2 = new BankAccount("987654321", 500);
  
  account1.deposit(200);
  account1.withdraw(100);
  
  account2.deposit(300);
  account2.withdraw(700);
  
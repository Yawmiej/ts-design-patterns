//BankAccount
//Depositing
//Withdrawing
//Balance  (should not be hidden and encapsulated)

class BankAccount {
  private _balance: number;
  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Depositing
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log('Invalid deposit amount');
      throw new Error('Invalid amount');
    }
    this._balance += amount;
  }

  // Withdrawing
  public withdraw(amount: number) {
    if (amount < 0) {
      console.log('Invalid withdrawal amount');
      throw new Error('Invalid amount');
    }

    if (amount > this._balance) {
      console.log('Insufficient funds');
      throw new Error('Insufficient funds');
    }

    this._balance -= amount;
  }

  // Check balance
  public get balance(): number {
    return this._balance;
  }
}

class Money {
    constructor(
        private amount: number,
        private currency: string
    ) {
        if(currency == null) {
            throw new Error("Invalid currency");
        }
    }
    public Add(money: Money): Money {
        if(money == null) {
            throw new Error("Money to add cannot be null");
        }
        if(this.currency != money.currency) {
            throw new Error("Cannot add money with different currency");
        }
        return new Money(this.amount + money.amount, this.currency);
    }
}

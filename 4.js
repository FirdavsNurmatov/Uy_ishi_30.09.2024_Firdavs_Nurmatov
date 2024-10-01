class BankAccount {
    balance = 0
    constructor(ownerName, accountNumber){
        this.ownerName = ownerName
        this.accountNumber = accountNumber
    }

    deposit (summa){
        this.balance += summa
        console.log(this.balance)
    }

    withdraw (summa){
        if(this.balance > summa){
            this.balance -= summa
            console.log(this.balance)
        }else{
            console.log("Hisobingizda mablag' yetarli emas")
        }
    }

    showBalance (){
        console.log(this.balance)
    }
}

let user = new BankAccount("Firdavs","8600 1254 4518 1257")

user.showBalance()
user.deposit(10000)
user.showBalance()

user.withdraw(15000)
user.showBalance()
user.withdraw(3500)
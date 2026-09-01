// let Account={
//     A_H_name:"Sumit",
//     A_Number:5534010013077,
//     A_Balance:10,
//      Deposite_amount:function(D_A){
//      return  this.A_Balance+D_A
//      },
//   Withdraw_A:function(W_A){
//     if(this.A_Balance<W_A){
//         alert("insufficient Balance")
//     }
//     else{
//         alert("Balance Available")
//     }

//     return this.A_Balance-WA
//   },
//   Final:function(){
//     console.log(this.Deposite_amount(25))
//     console.log(this.Withdraw_A(25))
//   }
// }
// Account.Final()
 let Account = {
    A_H_name: "Sumit",
    A_Number: 5534010013077,
    A_Balance: 10,

    Deposite_amount: function(D_A) {
        return this.A_Balance + D_A;
    },

    Withdraw_A: function(W_A) {
        if (this.A_Balance < W_A) {
             return "Insufficient Balance";
        } else {
            return this.A_Balance - W_A;;
        }
        
    },

    Final: function() {
        console.log(this.A_H_name)
        console.log(this.A_Number)
        console.log(this.A_Balance)
        console.log("After Deposit:", this.Deposite_amount(25));
        console.log("After Withdrawal:", this.Withdraw_A(5));
    }
};

Account.Final();
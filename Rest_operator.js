// function sum(...value){
  //   console.log(value)
//}
//sum(10,20)

function sum(Name,...value){
    let total=0
    let multi=1
    for(let n of value){
        total =total+n;
        multi=multi*n;
    }
console.log("name:",Name)
console.log("total:",total)
console.log("multiply:",multi)
console.log(...value)     //spread operator
console.log(value)


}
console.log(sum("sumit",12,45))

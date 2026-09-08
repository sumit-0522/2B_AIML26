function sum(...value){
    let sumof=0;
for(let i in value){
    sumof=sumof+value[i]
}
console.log(sumof)
}
let arr=[10,20,30,40,50];
sum(...arr)
arr.push(76)
sum(...arr)
arr.pop()  //delete last value 
sum(...arr)

var a1=[10,20,30]
var a2=[40,50]
var a3=[...a1,...a2]  // concatinate any array
console.log(a3)
var a3=[60,...a1,...a2]  // for push any value
console.log(a3)




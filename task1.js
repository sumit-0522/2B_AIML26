//Student marks percentage calculator

function result(...value){
    let result
    let sum=0;
    let count=0
    for(let i in value){
        sum=sum+value[i]
        count +=1
    }
    result=sum/count
    console.log(result,"%")
}
let arr =[10,20,30,40]
result(...arr)
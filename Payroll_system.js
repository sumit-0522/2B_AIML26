class Employee{
constructor(id, name,  basicSalary){
 this.id=id;
 this.name=name
 this.basicSalary=basicSalary
}
 display(){
    console.log("Id:",this.id)
    console.log("Name:",this.name)
    console.log("Basic_salary:",this.basicSalary)
 }
 calculateSalary(){
    console.log("you Salary:",this.basicSalary)
}

}



class Manager extends Employee {

    New_calculateSalary(incentive_property) {
        let finalSalary = this.basicSalary + incentive_property;
        console.log("Manager final salary:", finalSalary);
    }
}
let E1=new Manager(279,"sumit",250000)
E1.display()
E1.New_calculateSalary(100000)

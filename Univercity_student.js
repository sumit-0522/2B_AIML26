class Student{
static count=0;
  constructor(N,R,M){
    this.name=N;
    this.rollNo=R;
    this.marks=M;
  }
  display(){
    console.log("Name:",this.name)
    console.log("RollNumber",this.rollNo)
    console.log("Marks:",this.marks)
    Student.count=Student.count+1;
    if(this.marks>=35){
        console.log("Pass")
    }
    else{
        console.log("fail")
    }
  }
}
let s=new Student("sumit",202,35)
let s1=new Student("sumit",201,46)
s1.display()
s.display()
console.log(Student.count)

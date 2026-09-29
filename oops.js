// class Student{
// Name;
// roll_no;

// constructor( N,R){
//     this.Name=N;
//    this.roll_no=R;

 
//     console.log(this.Name);
//     console.log(this.roll_no);

// }
// }
// let s1= new Student("sumit",202);
//  class Student{
// constructor(Roll,name,year){
//     this.Rollnumber=Roll;
//     this.Name=name;
//     this.Year=year;

    
//      console.log(this.Rollnumber);
//      console.log(this.Name)
//      console.log(this.Year)
     
// }
//  }
//  let s1 =new Student();
//  let s2 = new Student(202,"sumit",2005)
 

// class Student{
//    static Fname="sumit";
//    static Lname="kasoudhan";
//     static display(){      // normal variable ko static function ka ander call nhi kar sakta hai
//         console.log(this.Fname)
//         console.log(this.Lname)    
//     }
// }
// Student.display()

class Student{
   static Fname="sumit";
   static Lname="kasoudhan";
    display(){             
        console.log(Student.Fname)
        console.log(Student.Lname)    
    }
}
let s1= new Student();
s1.display()
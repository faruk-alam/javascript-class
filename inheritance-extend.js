// parent class
class person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
    about(){
        console.log(`this is ${this.name} and age is ${this.age}`);
    }
    
}
// inherit from parent
// class student extends person{

// }
// let student1 = new student("Alex", 16);
// student1.about();

// The super keyword used inside a child class denotes its parent class.
// inheriting parent class
class Student extends person {

    constructor(name) {
    
        console.log("Creating student class");
        
        // call the super class constructor and pass in the name parameter
        super(name);
    }

}

let student1 = new Student("Jack", 20 );
student1.about();


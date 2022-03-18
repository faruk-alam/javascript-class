// Class Declarations
class employee{
    // creating object constructor
    constructor(id,name,profession,greet){
        this.id = id;
        this.name = name;
        this.profession = profession;
    // defining method
    }
    greet(){
        return ("Hello" + " " + this.name);
    
    }
}
const emp1 = new employee(101,"piter","manager");
const emp2 = new employee(102,"rita","assistant");
const emp3 = new employee(103,"alex","clark");
console.log(emp1.name);
console.log(emp2.id);
console.log(emp3.profession);
console.log(emp1.greet());
console.log(emp3.greet());
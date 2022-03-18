class rectangle{
    constructor(_height,_width,_color){
        console.log("The rectangle is being created");
     this.height = _height;
     this.width = _width;
     this.color = _color;
    }
    getArea(){
        return this.height * this.width;
    }
    printDescription(){
        return `I am rectangle ${this.height} * ${this.width} and color ${this.color}.`;

    }
}
let myRectangle1 = new rectangle(50,30,"green");
let myRectangle2 = new rectangle(45,25,"red");
let myRectangle3 = new rectangle(30,15,"blue");
console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
console.log(myRectangle3.getArea());
console.log(myRectangle1.printDescription());
console.log(myRectangle2.printDescription());
console.log(myRectangle3.printDescription());


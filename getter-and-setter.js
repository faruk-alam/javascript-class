class squire {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }
    get area(){
        return this.width * this.height ;
    }
    set area(area){
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}
let squire1 = new squire(30);
let squire2 = new squire(5);

console.log(squire1.area);
console.log(squire2.area);
console.log(squire1.width);
console.log(squire2.width);


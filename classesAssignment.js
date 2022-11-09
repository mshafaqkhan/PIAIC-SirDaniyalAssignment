class twonum{
    constructor(num1=0,num2=0){
        this.num1=num1;
        this.num2=num2;
    }
    sum(){
        console.log(this.num1+this.num2)
    }
    difference(){
        console.log(this.num1-this.num2)
    }
    division(){
        console.log(this.num1/this.num2)
    }
    Multiplication(){
        console.log(this.num1*this.num2)
    }

}

let obj1=new twonum(8,2);

obj1.sum();
obj1.difference();
obj1.division();
obj1.Multiplication();
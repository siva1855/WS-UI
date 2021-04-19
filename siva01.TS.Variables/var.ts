function f1() {
    var x;   //declaration
    x = 10;   //rendering
    var x;     // shadowing 
    x = 20;
    var y = 30;    //Initilazation
    console.log(x);
    console.log(y);
}
f1();
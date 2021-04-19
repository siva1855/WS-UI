function f1() {
    let x;   //declaration
    x = 10;   //rendering
    //let x;     //let variable can't be shadowing 
    x = 20;
    let y = 30;    //Initilazation
    console.log(x);
    console.log(y);
}
f1();
class Parent {
    public id: number = 101;
    private name: String = "TV";
    protected price: number = 40500.45;
}
class Child extends Parent {
    print(childObj: Child) {

        var parentObj = new Parent();
        parentObj.id;
        //parentObj.name;
        //parentObj.price;
        
        childObj.id;
        //childObj.name;
        childObj.price;
    

    }
}
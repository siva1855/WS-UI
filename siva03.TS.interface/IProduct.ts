interface IProduct {

    //public Id: number;
    id: number
    Name: String;
    Price: number;
    //may use (OR) may not Use
    brand?: String;
}
//use only properties,methods()
//must and Should to use all properties otherwise it will come error
//not use access modifiers

let product: IProduct = {
    id: 101,
    Name: "TV",
    Price: 25000.45

}
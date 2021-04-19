var Electronics = new Array();
Electronics[0] = "TV";
Electronics[1] = "Mobile";
Electronics[2] = "watch";
Electronics[3] = "Laptop";
Electronics[4] = "AC";
console.log(Electronics[1]);
console.log(Electronics.toString());
console.log(Electronics.join("<--->"));
console.log(Electronics.slice(0, 2));
var Sales = [35200, 12000, 1500, 30500, 45000];
function search(Electronics) {
    return Electronics == "Mobile";
}
console.log(Electronics.filter(search));
console.log(Sales.filter(function (price) {
    return price < 45000;
}));

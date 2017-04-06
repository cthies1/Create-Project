
function element(name, atomicNum, fact) {
    this.name = name;
    this.atomicNum = atomicNum;
    this.fact = fact;
}

var Li = new element("Lithium", 3, "The lightest metal");
var Be = new element ("Bromine", 4, "fun fact");
}

function elementAlert(elem) {
    msg  = "Element:" + elem.name + '<br>' + "Atomic Number" + elem.atomicNum + '<br>' + "Fact:" + elem.fact;
    //var msg = "Hello";
    document.getElementById("output").innerHTML = msg;

}

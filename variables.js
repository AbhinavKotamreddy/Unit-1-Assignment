var numberOfCats = 3;

function scope() {
    console.log(numberOfCats);
    let myName = "Milkyway";
    console.log(myName);
}
scope();

const city = "Philadelphia";
console.log(city);
document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 
const newnumbers=numbersArray.filter(function(number){
    return number>20 
})
console.log(newnumbers);



catsArray.push("Sniffles");
console.log("Opgave 2", catsArray);


const hasTrixie = dogsArray.includes("Trixie");
console.log("Opgave 3a", hasTrixie);


const hasBaxter = dogsArray.includes("Baxter");
console.log("Opgave 3a", hasBaxter);


const bagheera = catsArray.find(cat => cat === "Bagheera");
console.log("Opgave 4a", bagheera);

const salem = catsArray.find(cat => cat === "Salem");
console.log("Opgave 4b", salem);

}) // ends DOMContentLoaded
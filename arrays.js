document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 
const newnumbers=numbersArray.filter(function(number){
    return number>20 
})
console.log(newnumbers);      /* opgave 1 */



catsArray.push("Sniffles");
console.log("Opgave 2", catsArray);/* opgave 2 */


const hasTrixie = dogsArray.includes("Trixie");/* opgave 3 */
console.log("Opgave 3a", hasTrixie);


const hasBaxter = dogsArray.includes("Baxter"); /* opgave 3 */
console.log("Opgave 3a", hasBaxter);

 
const bagheera = catsArray.find(cat => cat === "Bagheera");   /* opgave 4 */
console.log("Opgave 4a", bagheera);

const salem = catsArray.find(cat => cat === "Salem");  /* opgave 4 */
console.log("Opgave 4b", salem);

const multipliedNumbers = numbersArray.map(number => number * 3);
console.log("Opgave 5", multipliedNumbers); /* opgave 5 */

const dogsString = dogsArray.join('');
console.log("Opgave 6", dogsString); /* opgave 6 */

const mangoIndex = fruitsArray.indexOf("Mango");
console.log("Opgave 7a", mangoIndex); /* opgave 7a */

const blåbærIndex = fruitsArray.indexOf("Blåbær");
console.log("Opgave 7a",blåbærIndex); /* opgave 7a */



const pollyIndex = dogsArray.indexOf("Polly");
if (pollyIndex !== -1) {
    dogsArray.splice(pollyIndex, 1);
}
console.log("Opgave 8", dogsArray); /* opgave 8 */

}) // ends DOMContentLoaded
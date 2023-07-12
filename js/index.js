console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "Manolito"
console.log("The driver's name is " + hacker1)

let hacker2 = "Pepito"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}
else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, it has " + hacker1.length + " characters!")
}

// Iteration 3: Loops

let capsSpaced = ""
for (let i = 0; i < hacker1.length; i++) {
    capsSpaced += hacker1[i].toUpperCase() + " " 
}
console.log(capsSpaced)

let capsSpacedReversed = ""
for (let i = hacker1.length -1; i >= 0; i--) {
    capsSpacedReversed += hacker1[i]
}
console.log(capsSpacedReversed)

if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.")
}
else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.")
}
else if (hacker1[0] === hacker2[0]) {
    console.log("What?! You both have the same name?")
}
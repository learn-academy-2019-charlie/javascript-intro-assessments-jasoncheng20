// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

console.log(mantra.charAt(0))

// 2. Write the code that determines if there is a 'x' in mantra.

const xDetector = (string) => {
    if (string.search("x") !== -1){
        return `There is an 'x' in "${string}".`
    } else {
        return `There is no 'x' in "${string}".`
    }
}

console.log(xDetector(mantra))

// 3. Write the code that determines if there is a 'v' in mantra.

const vDetector = (string) => {
    if (string.search("v") !== -1){
        return `There is a 'v' in "${string}".`
    } else {
        return `There is no 'v' in "${string}".`
    }
}
console.log(vDetector(mantra))

// Stretch: Write the code that returns the position of 'v' in mantra.

const vPosition = (string) => {
    if (string.search("v") !== -1){
        return `There is a 'v' in "${string}" at position ${string.search("v")}.`
    } else {
        return `There is no 'v' in "${string}".`
    }
}
console.log(vPosition(mantra))

// Consider the following statement:

var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

var arr1 = mantra.split("")
// for (let i = 0; i < arr1.length; i++){
//         console.log(arr1[i])
// }

// Stretch: Using a while loop.

var i = 0
while (i < arr1.length){
    console.log(arr1[i]); i++
}

// Super Stretch: Using forEach().

arr1.forEach(function(item, index, array){
    console.log(arr1[index])
})

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

function noVowels(string2) {
    if (typeof string2 === "string"){
        let arr2 = string2.split("")
        for (let i = 0; i < arr2.length; i++){
            if ((arr2[i] !== ("a")) && (arr2[i] !== ("e")) && (arr2[i] !== ("i")) && (arr2[i] !== ("o")) && (arr2[i] !== ("u"))) {
                console.log(arr2[i])
                // for some reason, when I use return here instead of console.log, it only outputs the first letter "t"...
            }
        }
    } else {
        throw TypeError()
    }
}

noVowels(message)

// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

const onlyCats = (arr3) => {
    var catArr = []
    for (let i = 0; i < arr3.length; i++){
        if (arr3[i].animal = 'cat'){
            catArr.push(arr3[i])
        }
    }
    return catArr
}

console.log(onlyCats(toonimals))

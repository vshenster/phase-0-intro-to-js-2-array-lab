// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}
destructivelyAppendCat(Ralph);

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCats = [...cats]  
    //newCats = ['Milo', 'Otis', 'Garfield']
    newCats.push(name)
    //newCats = ['Milo', 'Otis', 'Garfield', name]
    return newCats;
}

function prependCat(name) {
    const brandNewCats = [...cats]
    brandNewCats.unshift(name)
    return brandNewCats;
}

function removeLastCat() {
    const catsRemoved = [...cats]
    catsRemoved.pop()
    return catsRemoved;
}

function removeFirstCat() {
    const moreCatsRemoved = [...cats]
    moreCatsRemoved.shift()
    return moreCatsRemoved;
}
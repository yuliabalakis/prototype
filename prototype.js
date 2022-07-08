let animal = {
    move: "jump"
};
let cat = {
    __proto__: animal
};
console.log(cat.move);

let randomArray = []
let names = ['a','b','c','d','e','f','g','h','i','j']
let phones = ['1','2','3','4','5','6','7','8','9','10']


let RandomNum = (max=1000) => {
    let r = Math.floor(Math.random()*max)
    return r;
}
let randomLoop = RandomNum(100)+1;
for(let i =0; i < randomLoop; i++) {
    let randomPos = RandomNum(10);
    let container = {
        Name: names[randomPos],
        Phone: phones[randomPos]
    }
    randomArray.push(container);
    // randomArray.push(RandomNum());
}
console.log(randomArray);

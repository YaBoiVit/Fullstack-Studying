var countPage = require('./count')

let randomNumber = Math.floor(Math.random() * 100)+1
let randomAct = Math.floor(Math.random() * 2)
let result = 0;
console.log(randomNumber,randomAct)
if(randomAct == 1){
    result = countPage.add(randomNumber)
}
else{
    result = countPage.decrease(randomNumber)
}
console.log(result)

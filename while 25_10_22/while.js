let rand = Math.floor(Math.random()*1000);
let i=0;
let tries=10;
while (i<=10){
    let n = +prompt('Enter number, Attempts:' + tries)
    if (n<rand)
    alert('Higher')
    else if (n>rand)
    alert('Lower')
    else if (n==rand) {
    alert('Good Job')
    break;
}   
    i++;
    tries--;
}
if (tries<0)
alert('You Lost')

console.log(rand)
console.log(tries)
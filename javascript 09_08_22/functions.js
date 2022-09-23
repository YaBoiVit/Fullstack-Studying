var numbersArr=[1,2,3,4,5,6,7,8,9,10]

function loop1(){
    for(i=0;i<numbersArr.length;i++) {
        multi(numbersArr[i])
    }
}
function multi(num) {  
    console.log(num * 5)
}
loop1()
FirstName = "Vitali";
LastName = "Pat";
var num1 = prompt("Enter first product price");
var num2 = prompt("Enter second product price");
var num3 = prompt("Enter third product price");
var num4 = prompt("Enter payment");
var sum = num4-num3-num2-num1;
if(sum>0) {
    alert("Your change is " , sum);
}
else if(sum<0)
{
    var sum = sum * -1;
    alert("You need to add " + sum + " nis");
}   
else
{
    alert("Thank you");
}


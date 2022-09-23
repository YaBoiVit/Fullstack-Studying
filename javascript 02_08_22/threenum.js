var num1=+prompt("Enter first numer");
var num2=+prompt("Enter second numer");
var num3=+prompt("Enter third numer");

if (num1>num2 && num1>num3)
{
    alert("Ffrst number is bigger");
}

else if (num2>num3 && num2>num1)
{
    alert("Second number is bigger")
}

else if (num3>num1 && num3>num2)
{
    alert("Third number is bigger")
}
else {
    alert("All numbers are equal")
}

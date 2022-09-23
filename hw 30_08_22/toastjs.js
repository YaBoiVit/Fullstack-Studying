function total(){
    var price=12;
    printall.innerHTML = ''
    if(Mushrooms.checked)
        price+=2
    if(Olives.checked)
        price+=2
    if(Corn.checked)
        price+=2
    if(Bulgarian.checked)
        price+=3
    if(Extra.checked)
        price+=3

    printall.innerHTML +=`
    Total Price: ${price} nis
    `
    MainForm.reset()
}
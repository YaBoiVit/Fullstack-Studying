var Saved = []
var i = 0;
    function ProductAdd(){
        var container = {
        Product:ProductDV.value ,
        Price:PriceDV.value ,
        Image:ImageDV.value,
        Category:CategoryDV.value
        }
        Saved.push(container)
        formEL.reset();
        PrintTable()
    }
    function PrintTable(){
    var TableRow = `
    <tr id="prod${i}">
    <th scope="row"> ${Saved[i].Product}</th>
    <td> ${Saved[i].Price}</td>
    <td> ${CatName(Saved[i].Category)}</td>
    <td> <img src="${Saved[i].Image}" width="50""></td>
    <td> <button style="margin-top:5px" type="button" class="btn btn-danger" onclick="deleteRow(${i})">Remove</button></td>
    </tr>`
    TableDV.innerHTML+=TableRow
    i++;
    }
    function CatName(SavedId){
        if(SavedId==1)  
            return 'Drinks'
        if(SavedId==2)
            return 'Meat'
        if(SavedId==3)
            return 'Dairy'
        if(SavedId==4)
            return 'Snacks'
        return 'Basic'
    }
    function deleteRow(cnt) {
    document.getElementById(`prod${cnt}`).remove();
    }

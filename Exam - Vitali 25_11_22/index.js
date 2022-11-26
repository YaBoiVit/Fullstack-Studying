let AllCountries = 'https://restcountries.com/v3.1/all'
let SearchCrountry = 'https://restcountries.com/v3.1/name/'
let Countries = []
let SearchedCountries = []
callAjax(PrintAllCountries, 0)
function callAjax(_function, id = 0) {  // Main Ajax
    let url
    if (id == 0) {
    url = AllCountries
    } else {
    url = SearchCrountry + id
    }
    $.ajax({
    type: 'GET',
    datatype: 'json',
    url: url,
    success: function (data) {
    _function(data)
    },
    error: function (error) {
    console.log('error : ', error)
    },
})
}
function PrintAllCountries(data){  // All Countries
    Countries = data
    console.log(Countries)
    TableCountries.innerHTML = ''
    for(i=0; i<Countries.length; i++){
        let str = `
        <tr>
            <td>${Countries[i].name.official}</td>
            <td>${Countries[i].population}</td>
        </tr>
        `
        TableCountries.innerHTML += str
    }
    PopulationCalc(Countries)
    PrintAllContinents(Countries)
}
function PrintAllContinents(Countries){  //  All Continents
    let ob = {
        Americas: 0,
        Europe: 0,
        Africa: 0,
        Asia: 0,
        Oceania: 0 ,
        Antarctic: 0
    }
    TableContinents.innerHTML = ''
    for(i=0; i<Countries.length; i++){
        if(Countries[i].region == "Americas")
        ob.Americas += 1;
        if(Countries[i].region == "Europe")
        ob.Europe += 1;
        if(Countries[i].region == "Africa")
        ob.Africa += 1;
        if(Countries[i].region == "Asia")
        ob.Asia += 1;
        if(Countries[i].region == "Oceania")
        ob.Oceania += 1;
        if(Countries[i].region == "Antarctic")
        ob.Antarctic += 1;
    }
    console.log(ob)
        let str = `
        <tr>
            <td>Americas</td>
            <td> ${ob.Americas} </td>
        </tr>
        <tr>
            <td>Europe</td>
            <td> ${ob.Europe} </td>
        </tr>
        <tr>
            <td>Africa</td>
            <td> ${ob.Africa} </td>
        </tr>
        <tr>
            <td>Asia</td>
            <td> ${ob.Asia} </td>
        </tr>
        <tr>
            <td>Oceania</td>
            <td> ${ob.Oceania} </td>
        </tr>
        <tr>
            <td>Antarctic</td>
            <td> ${ob.Antarctic} </td>
        </tr>
        `
    TableContinents.innerHTML += str
}

function PrintSearchedCountrires(data){  // Search Input Print
    SearchedCountries = data
    TableCountries.innerHTML = ''
    for(i=0; i<SearchedCountries.length; i++){
        let str = `
        <tr>
            <td>${SearchedCountries[i].name.official}</td>
            <td>${SearchedCountries[i].population}</td>
        </tr>
        `
        TableCountries.innerHTML += str
    }
    PopulationCalc(SearchedCountries)
    PrintSearchedContinents (SearchedCountries)
}
function PrintSearchedContinents(SearchedCountries){ // Prints Searched Continents
    let obSearch = {
        Americas: 0,
        Europe: 0,
        Africa: 0,
        Asia: 0,
        Oceania: 0 ,
        Antarctic: 0
    }
    TableContinents.innerHTML = ''
    for(i=0; i<SearchedCountries.length; i++){
        if(SearchedCountries[i].region == "Americas")
        obSearch.Americas += 1;
        if(SearchedCountries[i].region == "Europe")
        obSearch.Europe += 1;
        if(SearchedCountries[i].region == "Africa")
        obSearch.Africa += 1;
        if(SearchedCountries[i].region == "Asia")
        obSearch.Asia += 1;
        if(SearchedCountries[i].region == "Oceania")
        obSearch.Oceania += 1;
        if(SearchedCountries[i].region == "Antarctic")
        obSearch.Antarctic += 1;
    }
    console.log(obSearch)
        let str = `
        <tr>
            <td>Americas</td>
            <td> ${obSearch.Americas} </td>
        </tr>
        <tr>
            <td>Europe</td>
            <td> ${obSearch.Europe} </td>
        </tr>
        <tr>
            <td>Africa</td>
            <td> ${obSearch.Africa} </td>
        </tr>
        <tr>
            <td>Asia</td>
            <td> ${obSearch.Asia} </td>
        </tr>
        <tr>
            <td>Oceania</td>
            <td> ${obSearch.Oceania} </td>
        </tr>
        <tr>
            <td>Antarctic</td>
            <td> ${obSearch.Antarctic} </td>
        </tr>
        `
    TableContinents.innerHTML += str
}
function SearchCountry(name){  // Searches Country
    console.log(name)
    callAjax(PrintSearchedCountrires, name)

}
function PopulationCalc(SentCountries){  // Prints Population
    let TotalCountries = 0
    let PopulationSum = 0
    let PopulationAverage = 0
    var divide = 0
    for (i=0;i<SentCountries.length;i++){
        PopulationSum = PopulationSum + SentCountries[i].population
        divide++;
        TotalCountries++;
    }
    PopulationAverage = PopulationSum / divide;
    var result = Math.round(PopulationAverage * 1)
    Population.innerHTML = `
    <p> Total Countries: ${TotalCountries} </p>
    <p> Population: ${PopulationSum}</p> 
    <p> Average Population: ${result} </p>
    `
    
    console.log(divide)
    console.log(PopulationAverage)
    console.log(PopulationSum)
}
// var counter = 0
// var i = 0
// TableContinents.innerHTML = ''
// Countries.map((country) => {
//     let str = `
//     <tr>
//         <td>${country.region}</td>
//         <td> ${counter} </td>
//     </tr>
//     `
//     TableContinents.innerHTML += str
//     counter=0;
// })
// }
let allCoinsURL = 'https://api.coingecko.com/api/v3/coins/list';

let specificCoinIdURL = 'https://api.coingecko.com/api/v3/coins/';

let coinsDV = document.getElementById('displayBitcoins');

let coinsArray = [];

function ajaxFunction(callbackFunction, someURL)
{
    coinsDV.innerHTML = '';
    
    $.ajax ({
        type: 'GET', 
        dataType: 'json',
        url: someURL, 

        success: function(data) 
        {
            coinsArray = data;
            callbackFunction(coinsArray);
        },
        error: function(error) 
        {
            console.log('error: ', error);
        }
    })
}

function printAllCoinsToHtmlCards( coinsData )
{

    for ( let i = 0; i < 50; i++ )
    {
        printSingleCoinToHtmlCard( coinsData[i] , i );
    }
}

function printSingleCoinToHtmlCard(singleCoin , i)
{
    IdName  = "Colapse" + i
    let c = '';
     
    c += '<div class="mt-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">';
    c += '<div class="card mb-2" style="width: 13rem;">';
    c += '<div class="card-body">';
    c += `<div class = "d-flex">
        <h5>${singleCoin.symbol}</h5>
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
    </div>`;
    c += `<p>${singleCoin.name}</p>`;
    c += `      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#${IdName}"
                 aria-expanded="false" aria-controls="collapseExample">More Info </button>`
    c += ` <div class="collapse" id="${IdName}">`
    c += `<div class="CardInfo" >`
    c += `<div> Small Image </div>`
    c += `<p class="CoinName"> Name: </p><br/>`
    c += `<div class="Value"> USD: $</div>`
    c += `<div class="Value"> EUR: €</div>`
    c += `<div class="Value"> ILS: ₪</div>`
    c += `</div>`
    c += `</div>`;
    c += `</div>`;
    c += `</div>`;

    coinsDV.innerHTML += c;
}

ajaxFunction( printAllCoinsToHtmlCards, allCoinsURL );
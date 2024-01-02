const amount = document.getElementById('amount');

const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const API_KEY="tD1ldLynjdwoiDUC1QpmIg==p9GMxT7dC8BpmK2B"
const apiUrl='https://api.api-ninjas.com/v1/exchangerate?pair=USD_'

convert.addEventListener('click', () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;

    fetch(url, {
        
        headers: {
            'X-Api-Key': API_KEY 

        }
    })
    .then(response => {

        
        return response.json()
        


     } )
    
    .then(data => {
        
        const rate = data.exchange_rate;
        const totalConverted = amountTotal * rate;
        result.innerHTML = `${amount.value} ${currency.value} = ${totalConverted.toFixed(2)} USD`;

    })
    .catch(error => {
        console.error('Request failed:', error);
        result.innerHTML = 'An error occurred please try again later.'
        
    })

})


const url = 'https://currency-exchange.p.rapidapi.com/listquotes';


const options = {
    method: 'GET',
    params: {base: 'USD', symbols: 'GBP,JPY,EUR'},
    headers: {
        'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
        'x-rapidapi-key': '8722351e3fmsh6ec6cfe771ce829p1c2536jsn78ef23ba736d'
    }
};

export const getLatestCurrency = async () => {
    try {
        const res = fetch(url, options)
        return res
    } catch (error) {
        console.log(error)
    }
};
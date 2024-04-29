// Currency converter feature for a store's inventory using the map HOF

const itemsList = [
    {
        name : "Chocolates",
        priceUSD : 100
    },
    {
        name : "Cookies",
        priceUSD : 80
    },
    {
        name : "Pastries",
        priceUSD : 30
    },
    {
        name : "Donuts",
        priceUSD : 50
    }
];

var exchangeRate = 80

const convertedPrice = () => {
    const priceINR = itemsList.map((item) => item.name+':'+((item.priceUSD)*exchangeRate))
    console.log(priceINR);
}
convertedPrice()
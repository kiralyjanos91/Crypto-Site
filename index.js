const bitcoinPrice = document.querySelector(".bitcoin-price")

async function coinPrice() {
    let response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    let price = await response.json()
    return price
}

coinPrice()
    .then(
        bitprice => bitcoinPrice.textContent = `${bitprice.bitcoin.usd} usd`
    )

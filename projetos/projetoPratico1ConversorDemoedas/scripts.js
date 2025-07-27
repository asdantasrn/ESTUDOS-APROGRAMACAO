const convertButton = document.querySelector(".convert-Button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor para conversao
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.20
    const euroToDay = 6.2

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToDay)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)

}
function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/usaLogo.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/logEuro.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
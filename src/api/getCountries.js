export async function getAllCountries() {
    await fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
}

export async function getCountriesBySearch(query){
    await fetch(`https://restcountries.com/v3.1/name/${query}`)
        .then((res) => res.json())
}

export async function getCountriesByFilter(region) {
    await fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.json())
}
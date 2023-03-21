const loadCountries = () =>{
    fetch(`https://restcountries.com/v3.1/all`).then(res => res.json()).then(data => displayCountries(data)).catch(err => console.log(err))
}

const displayCountries = countries =>{
    console.log(countries);
    const countryHTML = countries.map(country => getCountryHTML(country));
    document.getElementById("countries").innerHTML = countryHTML.join(' ');
}
 
const getCountryHTML = country =>{
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
            <h2>${country.continents[0]}</h2>
        </div>
    `
}
loadCountries();
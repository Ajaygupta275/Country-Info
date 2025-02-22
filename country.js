const params = new URLSearchParams(window.location.search);
const countryName = params.get('name') || 'No name found';
// console.log(countryName);
const flagImage=document.querySelector('.country-details img')
const countryNameH1=document.querySelector('.country-details h1')
const nativeName=document.querySelector('.native-name')
const population=document.querySelector('.population')
const region=document.querySelector('.region')
const subRegion=document.querySelector('.sub-region')
const capital=document.querySelector('.capital')
const topLevelDomain=document.querySelector('.top-level-domain')
const currencies=document.querySelector('.currency')
const languages=document.querySelector('.language')
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then(([countryData])=>{
    console.log(countryData)
    flagImage.src=countryData.flags.svg
    countryNameH1.innerText=countryData.name.common
    population.innerText=countryData.population
    region.innerText=countryData.region
    subRegion.innerText=countryData.subregion
    capital.innerText=countryData.capital?.[0]
    // currency.innerText=countryData.currencies
    topLevelDomain.innerText=countryData.tld.join(",")
    // language.innerText=countryData.languages

    
    if(countryData.name.nativeName){
        nativeName.innerText= Object.values(countryData.name.nativeName)[0].common;
    }else{
        nativeName.innerText=countryData.name.common
    }

    if(countryData.currencies){
        currencies.innerText=Object.values(countryData.currencies).map((currency)=>currency.name).join(',')
    }

    if(countryData.languages){
        languages.innerText=Object.values(countryData.languages).join(',')
    }
})
const params = new URLSearchParams(window.location.search);
const countryName = params.get('name') || 'No name found';
console.log(countryName);
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then((countryData)=>{
    console.log(countryData[0])
})
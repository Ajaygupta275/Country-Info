const countriesConatiner=document.querySelector('.country-container');
fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
    data.forEach((country)=>{
        //  console.log(country.capital)
        const countryCard=document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href=`/country.html?name=${country.name.common}`
        

const cardHTML=`
                   <img src=${country.flags.svg} alt="country-flag"/>
                   <div class="card-text">
                         <h2 class="card-tittle">${country.name.common}</h2>
                         <p><b>population :</b>${country.population}</p>
                         <p><b>region :</b>${country.region}</p>
                         <p><b>capital :</b>${country.capital}</p>
                    </div>
`
countryCard.innerHTML=cardHTML
countriesConatiner.append(countryCard)
    })
})



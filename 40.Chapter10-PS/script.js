async function getCountries() {
  try {
    const response = await fetch(
      "https://countries-api-abhishek.vercel.app/countries"
    );
    const result = await response.json();
    const countries = result.data.slice(0, 50);
    console.log(countries);

    const container = document.getElementById("countries");

    countries.forEach((country) => {
      const card = document.createElement("div");
      card.className = "card";


      card.innerHTML = `
        <img src="${country.flag}" alt="${country.name}"/>
        <h2>${country.name}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population.toLocaleString()}</p>
        <p>Area: ${country.area.toLocaleString()} km²</p>
        <p>Region: ${country.region}</p>
        <p>Subregion: ${country.subregion}</p>
        <p>Latitude : ${country.coordinates.latitude}</p>
        <p>Longitude : ${country.coordinates.longitude}</p>
        `;
      container.appendChild(card);
    });
  } catch (error) {
    console.log("Error fetching countries:", error);
  }
}

getCountries();

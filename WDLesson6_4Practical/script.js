let data;
async function init(){
  
  let link = "collision.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let country = data[i];
    build += `<div class="card">
                <h2>${country.name}</h2>
                <img class="fit" src="${country.flag_url}">
                <p>Language: ${country.primary_language}</p>
                <p>Population: ${country.population}</p>
                <p>Continent: ${country.continent}</p>
                <a href="${country.googleMaps}" target="_blank"> Map </a>
              </div>`
  }


  output.innerHTML = build;

}
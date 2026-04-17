async function init(){
  let link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json";

  let info = await fetch(link);
  let data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  // Traverse the data
  data.items.forEach(criminal => {

    let name = criminal.title;
    let img = criminal.images[0]?.original || "";
    let desc = criminal.description || "No description available";
    let url = criminal.files[0]?.url || "#";

    build += `
      <div class="card">
        <h3>${name}</h3>
        <img src="${img}" class="fit">
        <p>${desc}</p>
        <a class="button" target="_blank" 
        href="https://mozilla.github.io/pdf.js/web/viewer.html?file=${url}">
        View Poster
        </a>
      </div>
    `;
  });

  output.innerHTML = build;
}
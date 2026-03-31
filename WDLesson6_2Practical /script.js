function BHS() {
  let school = {
    name: "Bayside High School",
    image: "https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    address: "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };

  let output = document.getElementById("output");

  output.innerHTML = `
    <div class="card">
      <h2>${school.name}</h2>
      <img src="${school.image}">
      <p>${school.address}</p>
    </div>
  `;
}


function example2() {
  let school = {
    name: "Bayside High School",
    image: "https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    address: "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };

  let output = document.getElementById("output");

  let html = `<div class="card">`;

  for (let key in school) {
    if (key === "image") {
      html += `<img src="${school[key]}">`;
    } else {
      html += `<p><strong>${key}:</strong> ${school[key]}</p>`;
    }
  }

  html += `</div>`;
  output.innerHTML = html;
}


function artist() {
  let name = prompt("Enter artist name:");
  let album = prompt("Enter album name:");
  let image = prompt("Enter album image URL:");
  let url = prompt("Enter artist website URL:");

  let artist = {
    name: name,
    album: album,
    image: image,
    url: url
  };

  let output = document.getElementById("output");

  output.innerHTML = `
    <div class="card">
      <h2>${artist.name}</h2>
      <a href="${artist.url}" target="_blank">
        <img src="${artist.image}">
      </a>
      <p><strong>Album:</strong> ${artist.album}</p>
    </div>
  `;
}
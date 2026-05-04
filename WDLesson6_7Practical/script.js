// Expanded dataset with 50 more entries (total of 58 collisions now)
const collisionData = [
    { id: 1, type: "rear-end", date: "2023-01-01", location: "Location 1", borough: "Manhattan", injured: 2, killed: 0, vehiclesInvolved: 3 },
    { id: 2, type: "side-impact", date: "2023-02-15", location: "Location 2", borough: "Brooklyn", injured: 1, killed: 0, vehiclesInvolved: 2 },
    { id: 3, type: "rear-end", date: "2023-03-10", location: "Location 3", borough: "Queens", injured: 3, killed: 1, vehiclesInvolved: 4 },
    { id: 4, type: "side-impact", date: "2023-04-22", location: "Location 4", borough: "The Bronx", injured: 0, killed: 0, vehiclesInvolved: 1 },
    { id: 5, type: "rear-end", date: "2023-05-10", location: "Location 5", borough: "Staten Island", injured: 4, killed: 1, vehiclesInvolved: 2 },
    { id: 6, type: "side-impact", date: "2023-06-25", location: "Location 6", borough: "Manhattan", injured: 2, killed: 0, vehiclesInvolved: 2 },
    { id: 7, type: "rear-end", date: "2023-07-30", location: "Location 7", borough: "Brooklyn", injured: 1, killed: 0, vehiclesInvolved: 3 },
    { id: 8, type: "side-impact", date: "2023-08-12", location: "Location 8", borough: "Queens", injured: 0, killed: 0, vehiclesInvolved: 2 },
    { id: 9, type: "rear-end", date: "2023-08-20", location: "Location 9", borough: "The Bronx", injured: 5, killed: 0, vehiclesInvolved: 4 },
    { id: 10, type: "side-impact", date: "2023-09-15", location: "Location 10", borough: "Staten Island", injured: 3, killed: 0, vehiclesInvolved: 3 },
    { id: 11, type: "rear-end", date: "2023-10-01", location: "Location 11", borough: "Manhattan", injured: 0, killed: 0, vehiclesInvolved: 2 },
    { id: 12, type: "side-impact", date: "2023-10-05", location: "Location 12", borough: "Brooklyn", injured: 2, killed: 0, vehiclesInvolved: 2 },
    { id: 13, type: "rear-end", date: "2023-10-18", location: "Location 13", borough: "Queens", injured: 1, killed: 0, vehiclesInvolved: 3 },
    { id: 14, type: "side-impact", date: "2023-11-12", location: "Location 14", borough: "The Bronx", injured: 4, killed: 1, vehiclesInvolved: 2 },
    { id: 15, type: "rear-end", date: "2023-12-01", location: "Location 15", borough: "Staten Island", injured: 2, killed: 0, vehiclesInvolved: 4 },
    { id: 16, type: "side-impact", date: "2023-12-14", location: "Location 16", borough: "Manhattan", injured: 3, killed: 0, vehiclesInvolved: 2 },
    { id: 17, type: "rear-end", date: "2023-01-20", location: "Location 17", borough: "Brooklyn", injured: 0, killed: 0, vehiclesInvolved: 3 },
    { id: 18, type: "side-impact", date: "2023-02-22", location: "Location 18", borough: "Queens", injured: 1, killed: 0, vehiclesInvolved: 2 },
    { id: 19, type: "rear-end", date: "2023-03-05", location: "Location 19", borough: "The Bronx", injured: 2, killed: 0, vehiclesInvolved: 4 },
    { id: 20, type: "side-impact", date: "2023-03-30", location: "Location 20", borough: "Staten Island", injured: 1, killed: 0, vehiclesInvolved: 2 },
    { id: 21, type: "rear-end", date: "2023-04-18", location: "Location 21", borough: "Manhattan", injured: 3, killed: 0, vehiclesInvolved: 4 },
    { id: 22, type: "side-impact", date: "2023-05-25", location: "Location 22", borough: "Brooklyn", injured: 0, killed: 0, vehiclesInvolved: 3 },
    { id: 23, type: "rear-end", date: "2023-06-09", location: "Location 23", borough: "Queens", injured: 2, killed: 0, vehiclesInvolved: 4 },
    { id: 24, type: "side-impact", date: "2023-06-18", location: "Location 24", borough: "The Bronx", injured: 1, killed: 0, vehiclesInvolved: 2 },
    { id: 25, type: "rear-end", date: "2023-07-13", location: "Location 25", borough: "Staten Island", injured: 4, killed: 1, vehiclesInvolved: 3 },
    { id: 26, type: "side-impact", date: "2023-08-01", location: "Location 26", borough: "Manhattan", injured: 1, killed: 0, vehiclesInvolved: 4 },
    { id: 27, type: "rear-end", date: "2023-09-06", location: "Location 27", borough: "Brooklyn", injured: 2, killed: 0, vehiclesInvolved: 2 },
    { id: 28, type: "side-impact", date: "2023-10-12", location: "Location 28", borough: "Queens", injured: 3, killed: 0, vehiclesInvolved: 4 },
    { id: 29, type: "rear-end", date: "2023-11-10", location: "Location 29", borough: "The Bronx", injured: 2, killed: 1, vehiclesInvolved: 3 },
    { id: 30, type: "side-impact", date: "2023-12-05", location: "Location 30", borough: "Staten Island", injured: 1, killed: 0, vehiclesInvolved: 2 },
    { id: 31, type: "rear-end", date: "2023-01-12", location: "Location 31", borough: "Manhattan", injured: 0, killed: 0, vehiclesInvolved: 2 },
    { id: 32, type: "side-impact", date: "2023-02-19", location: "Location 32", borough: "Brooklyn", injured: 3, killed: 0, vehiclesInvolved: 3 },
    { id: 33, type: "rear-end", date: "2023-03-09", location: "Location 33", borough: "Queens", injured: 2, killed: 0, vehiclesInvolved: 4 },
    { id: 34, type: "side-impact", date: "2023-04-03", location: "Location 34", borough: "The Bronx", injured: 1, killed: 0, vehiclesInvolved: 2 },
    { id: 35, type: "rear-end", date: "2023-05-15", location: "Location 35", borough: "Staten Island", injured: 3, killed: 1, vehiclesInvolved: 2 },
    { id: 36, type: "side-impact", date: "2023-06-03", location: "Location 36", borough: "Manhattan", injured: 2, killed: 0, vehiclesInvolved: 4 },
    { id: 37, type: "rear-end", date: "2023-07-22", location: "Location 37", borough: "Brooklyn", injured: 1, killed: 0, vehiclesInvolved: 3 },
    { id: 38, type: "side-impact", date: "2023-08-16", location: "Location 38", borough: "Queens", injured: 4, killed: 1, vehiclesInvolved: 3 },
    { id: 39, type: "rear-end", date: "2023-09-27", location: "Location 39", borough: "The Bronx", injured: 0, killed: 0, vehiclesInvolved: 1 },
    { id: 40, type: "side-impact", date: "2023-10-22", location: "Location 40", borough: "Staten Island", injured: 1, killed: 0, vehiclesInvolved: 2 },
    { id: 41, type: "rear-end", date: "2023-11-05", location: "Location 41", borough: "Manhattan", injured: 2, killed: 0, vehiclesInvolved: 2 },
    { id: 42, type: "side-impact", date: "2023-12-17", location: "Location 42", borough: "Brooklyn", injured: 3, killed: 0, vehiclesInvolved: 4 },
    { id: 43, type: "rear-end", date: "2023-01-14", location: "Location 43", borough: "Queens", injured: 0, killed: 0, vehiclesInvolved: 2 },
    { id: 44, type: "side-impact", date: "2023-02-06", location: "Location 44", borough: "The Bronx", injured: 2, killed: 1, vehiclesInvolved: 3 },
    { id: 45, type: "rear-end", date: "2023-03-19", location: "Location 45", borough: "Staten Island", injured: 3, killed: 0, vehiclesInvolved: 4 },
    { id: 46, type: "side-impact", date: "2023-04-28", location: "Location 46", borough: "Manhattan", injured: 2, killed: 0, vehiclesInvolved: 3 },
    { id: 47, type: "rear-end", date: "2023-05-30", location: "Location 47", borough: "Brooklyn", injured: 1, killed: 0, vehiclesInvolved: 4 },
    { id: 48, type: "side-impact", date: "2023-06-14", location: "Location 48", borough: "Queens", injured: 3, killed: 1, vehiclesInvolved: 2 },
    { id: 49, type: "rear-end", date: "2023-07-09", location: "Location 49", borough: "The Bronx", injured: 2, killed: 0, vehiclesInvolved: 3 },
    { id: 50, type: "side-impact", date: "2023-08-05", location: "Location 50", borough: "Staten Island", injured: 1, killed: 0, vehiclesInvolved: 2 },
    { id: 51, type: "rear-end", date: "2023-09-03", location: "Location 51", borough: "Manhattan", injured: 2, killed: 1, vehiclesInvolved: 4 },
    { id: 52, type: "side-impact", date: "2023-10-14", location: "Location 52", borough: "Brooklyn", injured: 3, killed: 0, vehiclesInvolved: 3 },
    { id: 53, type: "rear-end", date: "2023-11-08", location: "Location 53", borough: "Queens", injured: 0, killed: 0, vehiclesInvolved: 2 },
    { id: 54, type: "side-impact", date: "2023-12-02", location: "Location 54", borough: "The Bronx", injured: 1, killed: 0, vehiclesInvolved: 2 },
    { id: 55, type: "rear-end", date: "2023-01-30", location: "Location 55", borough: "Staten Island", injured: 4, killed: 0, vehiclesInvolved: 4 },
    { id: 56, type: "side-impact", date: "2023-02-18", location: "Location 56", borough: "Manhattan", injured: 2, killed: 0, vehiclesInvolved: 3 },
    { id: 57, type: "rear-end", date: "2023-03-23", location: "Location 57", borough: "Brooklyn", injured: 1, killed: 0, vehiclesInvolved: 4 },
    { id: 58, type: "side-impact", date: "2023-04-10", location: "Location 58", borough: "Queens", injured: 3, killed: 1, vehiclesInvolved: 2 },
];

// Function to create and display the cards
function displayCards(data) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Clear existing cards

    data.forEach(collision => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>Collision ID: ${collision.id}</h3>
            <p><strong>Type:</strong> ${collision.type}</p>
            <p><strong>Date:</strong> ${collision.date}</p>
            <p><strong>Location:</strong> ${collision.location}</p>
            <p><strong>Borough:</strong> ${collision.borough}</p>
            <p><strong>Injured:</strong> ${collision.injured}</p>
            <p><strong>Killed:</strong> ${collision.killed}</p>
            <p><strong>Vehicles Involved:</strong> ${collision.vehiclesInvolved}</p>
        `;
        container.appendChild(card);
    });
}

// Function to filter data based on user input
function filterData() {
    const collisionType = document.getElementById('collision-type').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    let filteredData = collisionData;

    if (collisionType !== 'all') {
        filteredData = filteredData.filter(item => item.type === collisionType);
    }

    if (startDate) {
        filteredData = filteredData.filter(item => new Date(item.date) >= new Date(startDate));
    }

    if (endDate) {
        filteredData = filteredData.filter(item => new Date(item.date) <= new Date(endDate));
    }

    displayCards(filteredData);
}

// Initialize the page by displaying all cards
window.onload = () => {
    displayCards(collisionData);
    document.getElementById('filter-btn').addEventListener('click', filterData);
};
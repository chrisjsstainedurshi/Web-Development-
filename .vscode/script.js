const collisions = [
    {date: "2023-04-20", time: "14:30", borough: "MANHATTAN", zip_code: "10001", persons_injured: 2, persons_killed: 0, contributing_factor: "Driver Inattention/Distraction", vehicle_type: "Sedan"},
    {date: "2023-04-21", time: "09:15", borough: "BROOKLYN", zip_code: "11201", persons_injured: 0, persons_killed: 1, contributing_factor: "Speeding", vehicle_type: "SUV"},
    {date: "2023-04-22", time: "17:45", borough: "QUEENS", zip_code: "11375", persons_injured: 1, persons_killed: 0, contributing_factor: "Failure to Yield Right-of-Way", vehicle_type: "Taxi"},
    {date: "2023-04-23", time: "08:20", borough: "BRONX", zip_code: "10453", persons_injured: 3, persons_killed: 0, contributing_factor: "Following Too Closely", vehicle_type: "Pickup Truck"},
    {date: "2023-04-24", time: "22:10", borough: "STATEN ISLAND", zip_code: "10314", persons_injured: 0, persons_killed: 2, contributing_factor: "Alcohol Involvement", vehicle_type: "SUV"},
    {date: "2023-04-25", time: "12:05", borough: "MANHATTAN", zip_code: "10022", persons_injured: 1, persons_killed: 0, contributing_factor: "Pedestrian/Bicyclist Error", vehicle_type: "Sedan"},
    {date: "2023-04-26", time: "18:30", borough: "BROOKLYN", zip_code: "11215", persons_injured: 2, persons_killed: 1, contributing_factor: "Unsafe Lane Changing", vehicle_type: "Motorcycle"},
    {date: "2023-04-27", time: "14:00", borough: "QUEENS", zip_code: "11432", persons_injured: 0, persons_killed: 0, contributing_factor: "Driver Inattention/Distraction", vehicle_type: "SUV"},
    {date: "2023-04-28", time: "07:50", borough: "BRONX", zip_code: "10457", persons_injured: 1, persons_killed: 0, contributing_factor: "Backing Unsafely", vehicle_type: "Van"},
    {date: "2023-04-29", time: "20:40", borough: "STATEN ISLAND", zip_code: "10312", persons_injured: 0, persons_killed: 1, contributing_factor: "Speeding", vehicle_type: "Sedan"},
    {date: "2023-05-01", time: "11:15", borough: "MANHATTAN", zip_code: "10036", persons_injured: 0, persons_killed: 0, contributing_factor: "Driver Inattention/Distraction", vehicle_type: "SUV"},
    {date: "2023-05-02", time: "19:30", borough: "BROOKLYN", zip_code: "11205", persons_injured: 2, persons_killed: 0, contributing_factor: "Failure to Yield Right-of-Way", vehicle_type: "Sedan"},
    {date: "2023-05-03", time: "16:20", borough: "QUEENS", zip_code: "11373", persons_injured: 1, persons_killed: 0, contributing_factor: "Following Too Closely", vehicle_type: "SUV"},
    {date: "2023-05-04", time: "09:50", borough: "BRONX", zip_code: "10458", persons_injured: 0, persons_killed: 0, contributing_factor: "Driver Inattention/Distraction", vehicle_type: "Motorcycle"},
    {date: "2023-05-05", time: "23:10", borough: "STATEN ISLAND", zip_code: "10306", persons_injured: 1, persons_killed: 1, contributing_factor: "Alcohol Involvement", vehicle_type: "Sedan"},
    {date: "2023-05-06", time: "13:40", borough: "MANHATTAN", zip_code: "10019", persons_injured: 3, persons_killed: 0, contributing_factor: "Unsafe Lane Changing", vehicle_type: "Taxi"},
    {date: "2023-05-07", time: "08:25", borough: "BROOKLYN", zip_code: "11217", persons_injured: 0, persons_killed: 0, contributing_factor: "Pedestrian/Bicyclist Error", vehicle_type: "SUV"},
    {date: "2023-05-08", time: "17:55", borough: "QUEENS", zip_code: "11421", persons_injured: 2, persons_killed: 1, contributing_factor: "Speeding", vehicle_type: "Sedan"},
    {date: "2023-05-09", time: "12:10", borough: "BRONX", zip_code: "10461", persons_injured: 1, persons_killed: 0, contributing_factor: "Driver Inattention/Distraction", vehicle_type: "Van"},
    {date: "2023-05-10", time: "21:00", borough: "STATEN ISLAND", zip_code: "10303", persons_injured: 0, persons_killed: 0, contributing_factor: "Following Too Closely", vehicle_type: "SUV"},
    {date: "2023-05-11", time: "10:35", borough: "MANHATTAN", zip_code: "10011", persons_injured: 1, persons_killed: 0, contributing_factor: "Failure to Yield Right-of-Way", vehicle_type: "Motorcycle"},
    {date: "2023-05-12", time: "18:50", borough: "BROOKLYN", zip_code: "11231", persons_injured: 0, persons_killed: 2, contributing_factor: "Alcohol Involvement", vehicle_type: "Sedan"},
    {date: "2023-05-13", time: "14:20", borough: "QUEENS", zip_code: "11368", persons_injured: 2, persons_killed: 0, contributing_factor: "Unsafe Lane Changing", vehicle_type: "SUV"},
    {date: "2023-05-14", time: "07:45", borough: "BRONX", zip_code: "10463", persons_injured: 0, persons_killed: 0, contributing_factor: "Driver Inattention/Distraction", vehicle_type: "Sedan"},
    {date: "2023-05-15", time: "22:30", borough: "STATEN ISLAND", zip_code: "10310", persons_injured: 1, persons_killed: 0, contributing_factor: "Speeding", vehicle_type: "Pickup Truck"},
    {date: "2023-05-16", time: "11:05", borough: "MANHATTAN", zip_code: "10018", persons_injured: 0, persons_killed: 1, contributing_factor: "Alcohol Involvement", vehicle_type: "SUV"},
    {date: "2023-05-17", time: "16:40", borough: "BROOKLYN", zip_code: "11206", persons_injured: 3, persons_killed: 0, contributing_factor: "Following Too Closely", vehicle_type: "Sedan"},
    {date: "2023-05-18", time: "09:15", borough: "QUEENS", zip_code: "11435", persons_injured: 0, persons_killed: 0, contributing_factor: "Pedestrian/Bicyclist Error", vehicle_type: "Taxi"},
    {date: "2023-05-19", time: "19:20", borough: "BRONX", zip_code: "10470", persons_injured: 2, persons_killed: 0, contributing_factor: "Driver Inattention/Distraction", vehicle_type: "SUV"},
    {date: "2023-05-20", time: "13:50", borough: "STATEN ISLAND", zip_code: "10308", persons_injured: 1, persons_killed: 1, contributing_factor: "Speeding", vehicle_type: "Sedan"},
    {date: "2023-05-21", time: "08:35", borough: "MANHATTAN", zip_code: "10023", persons_injured: 0, persons_killed: 0, contributing_factor: "Speeding", vehicle_type: "Millennium Falcon"},
];

const container = document.getElementById('collision-container');

function makeCard(c) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${c.borough} - ${c.date}</h3>
        <p>Time: ${c.time}</p>
        <p>Zip: ${c.zip_code}</p>
        <p>Injured: ${c.persons_injured}</p>
        <p>Killed: ${c.persons_killed}</p>
        <p>Factor: ${c.contributing_factor}</p>
        <p>Vehicle: ${c.vehicle_type}</p>
    `;
    container.appendChild(card);
}

function showCollisions(list) {
    container.innerHTML = '';
    if (list.length === 0) {
        container.innerHTML = '<p>No collisions found.</p>';
    } else {
        for (let i = 0; i < list.length; i++) {
            makeCard(list[i]);
        }
    }
}

// Show all collisions at first
showCollisions(collisions);

document.getElementById('applyFilters').addEventListener('click', function() {
    const borough = document.getElementById('borough').value;
    const injuries = document.getElementById('injuries').value;
    const date = document.getElementById('date').value;

    const filtered = [];
    for (let i = 0; i < collisions.length; i++) {
        const c = collisions[i];
        let ok = true;

        if (borough && c.borough !== borough) ok = false;
        if (injuries && c.persons_injured < parseInt(injuries)) ok = false;
        if (date && c.date !== date) ok = false;

        if (ok) filtered.push(c);
    }

    showCollisions(filtered);
});

// Reset button
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset Filters';
document.querySelector('.filters').appendChild(resetBtn);

resetBtn.addEventListener('click', function() {
    document.getElementById('borough').value = '';
    document.getElementById('injuries').value = '';
    document.getElementById('date').value = '';
    showCollisions(collisions);
});
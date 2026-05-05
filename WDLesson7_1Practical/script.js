// =========================
// GLOBAL STATE
// =========================
let historyLog = JSON.parse(localStorage.getItem("history")) || [];

// =========================
// DISPLAY + STORAGE
// =========================
function display(info){
  historyLog.push(info);
  localStorage.setItem("history", JSON.stringify(historyLog));

  document.getElementById("output").innerHTML +=
    `<div class="card fade">${info}</div>`;
}

function clearOutput(){
  document.getElementById("output").innerHTML = "";
}

function showHistory(){
  clearOutput();

  historyLog.forEach(item => {
    document.getElementById("output").innerHTML +=
      `<div class="card">${item}</div>`;
  });
}

// =========================
// HELPERS
// =========================
function rnd(lower, upper){
  return Math.floor(Math.random() * (upper - lower) + lower);
}

function area(length, width){
  return length * width;
}

function celsius(temp){
  return (temp - 32) * 5 / 9;
}

// =========================
// BMI
// =========================
function bmi(height, weight){
  return weight / (height * height);
}

function bmiCategory(b){
  if (b < 18.5) return "under weight";
  if (b < 25) return "normal weight";
  if (b < 30) return "over weight";
  return "obese";
}

function calculateBMI(){
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if(!height || !weight){
    display("❌ Enter valid height and weight");
    return;
  }

  let b = bmi(height, weight);
  let bc = bmiCategory(b);

  let barWidth = Math.min(b * 3, 100);

  let html = `
    <div>
      <strong>BMI:</strong> ${b.toFixed(2)}<br>
      <strong>Category:</strong> <span class="highlight">${bc}</span>
      <div class="bar">
        <div class="fill" style="width:${barWidth}%"></div>
      </div>
    </div>
  `;

  display(html);
}

// =========================
// LOTTERY
// =========================
function lottery(count){
  let nums = [];

  while(nums.length < count){
    let n = rnd(1,49);
    if(!nums.includes(n)){
      nums.push(n);
    }
  }

  return nums.sort((a,b) => a - b);
}

function generateLottery(){
  let count = parseInt(document.getElementById("lotteryCount").value);

  if(!count || count < 1 || count > 10){
    display("❌ Enter a number between 1–10");
    return;
  }

  let nums = lottery(count);

  let html = nums.map(n => `<span class="ball">${n}</span>`).join("");

  display(html);
}

// =========================
// DARK MODE
// =========================
function toggleDarkMode(){
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
}

// =========================
// INIT
// =========================
function init(){
  // Load dark mode
  if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark");
  }

  // Load history
  historyLog.forEach(item => {
    document.getElementById("output").innerHTML +=
      `<div class="card">${item}</div>`;
  });

  // Example outputs
  display("App Loaded ✅");
  display("Area (5x10): " + area(5,10));
  display("77°F → " + celsius(77).toFixed(2) + "°C");
}
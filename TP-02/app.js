// We'll fill this step by step. Keep your console open!
console.log("JS loaded ✅");

//2. Conditional
function letterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Grade(92) =", letterGrade(92)); // expect "A"

function mood(emoji) {
  let result;

  switch (emoji) {
    case ":)":
      result = "happy";
      break;
    case ":(":
      result = "sad";
      break;
    case ":|":
      result = "neutral";
      break;
    default:
      result = "unknown";
  }

  return result;
}

//3. Loop
console.log("Emoji", mood(":)"));
let sumFor = 0;
for (let i = 0; i <= 5; i++) {
  sumFor = sumFor + i;
}
console.log("sum using for", sumFor);

let sumWhile = 0;
let i = 1;

while (i <= 5) {
  sumWhile += i;
  i++;
}

console.log("Sum using while:", sumWhile);

const nums = [1, 2, 3, 4, 5];
let sumOf = 0;
for (const n of nums) {
  sumOf += n;
}
console.log("Sum using for of : ", sumOf);

//4 Arrays
const scores = [88, 95, 62];
scores.push(74);
scores.shift(84);
console.log(scores);
const highest = Math.max(...scores);
console.log("Highest score:", highest);
const passing = scores.filter((score) => score >= 60);
console.log("Passing scores:", passing);

//5) Functions
function square1(n) {
  return n * n;
}
const square2 = function (n) {
  return n * n;
};
const square3 = (n) => {
  return n * n;
};

console.log(square1(4), square2(4), square3(4));

//6) Objects
const student = { name: "Dana", score: 84 };
function describeStudent(s) {
  let status;

  if (s.score >= 60) {
    status = "passed";
  } else {
    status = "failed";
  }
  return `${s.name} scored ${s.score} (${status})`;
}

console.log(describeStudent(student));

//7 DOM selecting and updating
const output = document.getElementById("output");
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const stats = document.getElementById("stats");
const showOnlyPassBtn = document.getElementById("ShowonlypassedBtn");
output.textContent = "Ready to practice DOM!";

// 8) DOM: events, creating elements, rendering (Mini App)
const state = { students: [], showPassingOnly: false };

function computeAverage(arr) {
  if (arr.length === 0) return 0;

  let total = 0;
  for (const s of arr) {
    total += s.score;
  }

  return (total / arr.length).toFixed(1);
}

//9. Bonus 
const sortScore = (arr) => {
  arr.sort((a, b) => b.score - a.score);
};


function render() {
  list.innerHTML = ""; // Clear the list first

 
  const avg = computeAverage(state.students);
  const avgGrade = letterGrade(avg);
  let passCount = 0;

  state.students.forEach((s) => {
    if (s.score >= 60) passCount++;
  });

  stats.textContent = `Count: ${
    state.students.length
  } | Avg: ${avg} | Grade: ${avgGrade} | Pass: ${passCount} | Fail: ${
    state.students.length - passCount
  }`;

  
  const studentsToDisplay = state.showPassingOnly
    ? state.students.filter((s) => s.score >= 60)
    : state.students;

 
  studentsToDisplay.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = `${s.name} — ${s.score}`;
    li.className = s.score >= 60 ? "pass" : "fail";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "8px";

    removeBtn.onclick = () => {
      const originalIndex = state.students.findIndex(
        (student) => student === s
      );
      if (originalIndex > -1) {
        state.students.splice(originalIndex, 1);
      }
      render();
    };

    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}


addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value);
  
  if (!name || isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a valid name and score (0–100).");
    return;
  }
  
  state.students.push({ name, score });
  sortScore(state.students);
  
  render(); 
  nameInput.value = "";
  scoreInput.value = "";
  nameInput.focus();
});

clearBtn.addEventListener("click", () => {
  state.students = [];
  state.showPassingOnly = false; 
  showOnlyPassBtn.textContent = "Show Only Passed"; 
  render();
});

showOnlyPassBtn.addEventListener("click", () => {
  state.showPassingOnly = !state.showPassingOnly;

  showOnlyPassBtn.textContent = state.showPassingOnly
    ? "Show All"
    : "Show Only Passed";

  render();
});


render();

var marks = [85, 72, 66, 90, 55, 40, 35, 28, 20, 10];

function checkResult() {
  var passCount = 0;
  var failCount = 0;

  var resultText = `<h2>Student Results</h2>`;
  resultText += "<ul>";

  marks.forEach((mark, index) => {
    if (mark >= 40) {
      resultText += `<li>Student ${index + 1}: <span class="pass">Pass</span> - Marks: ${mark}</li>`;
      passCount++;
    } else {
      resultText += `<li>Student ${index + 1}: <span class="fail">Fail</span> - Marks: ${mark}</li>`;
      failCount++;
    }
  });

  resultText += "</ul>";
  resultText += `<p>Total Pass Students: ${passCount}</p>`;
  resultText += `<p>Total Fail Students: ${failCount}</p>`;
  resultText += `<button id="closeBtn" class="close-button">Close Results</button>`;

  document.getElementById("result").innerHTML = resultText;

  document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("result").innerHTML = "";
  });
}

document.getElementById("checkBtn").addEventListener("click", checkResult);
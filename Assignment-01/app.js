
    var marks = [85, 72, 66, 90, 55, 40, 35, 28, 20, 10];
    var passCount = 0;
    var failCount = 0;

    function checkResult() {
      var name = document.getElementById("studentName").value;
      var rollNo = document.getElementById("rollNo").value;
      
      if (name === "" || rollNo === "") {
        alert("Please enter your full name and roll number.");
        return;
      }

      var resultText = `<h2>Results for ${name} (Roll No: ${rollNo})</h2>`;
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

      document.getElementById("result").innerHTML = resultText;
    }
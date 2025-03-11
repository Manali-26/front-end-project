document.getElementById("calculateButton").addEventListener("click", function () {
    // Get subject marks
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const subject4 = parseFloat(document.getElementById("subject4").value);
  
    // Validate input
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4)) {
      alert("Please enter valid marks for all subjects.");
      return;
    }
  
    // Calculate total and percentage
    const total = subject1 + subject2 + subject3 + subject4;
    const percentage = (total / 400) * 100;
  
    // Determine grade
    let grade = "";
    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 70) {
      grade = "B+";
    } else if (percentage >= 60) {
      grade = "B";
    } else if (percentage >= 50) {
      grade = "C";
    } else {
      grade = "F";
    }
  
    // Display results
    document.getElementById("percentage").innerText = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById("grade").innerText = `Grade: ${grade}`;
  });
  
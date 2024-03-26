// Function to calculate BMI
function calculateBMI(weight, height) {
    // BMI Formula: weight (kg) / (height (m) * height (m))
    return weight / (height * height);
}

// Function to determine BMI status
function getBMIStatus(bmi, gender, ageMonths) {
    if (gender === "male") {
        if (ageMonths < 24 && bmi < 16) {
            return "Stunting";
        } else if (ageMonths >= 24 && bmi < 18.5) {
            return "Stunting";
        } else {
            return "Normal";
        }
    } else if (gender === "female") {
        if (ageMonths < 24 && bmi < 16) {
            return "Stunting";
        } else if (ageMonths >= 24 && bmi < 18.5) {
            return "Stunting";
        } else {
            return "Normal";
        }
    } else {
        return "Invalid gender input";
    }
}

// Function to check if input is valid number
function isValidNumber(value) {
    return !isNaN(value) && value > 0;
}

// Function to handle calculation
function calculate() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var ageMonths = parseFloat(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;

    if (isValidNumber(weight) && isValidNumber(height) && isValidNumber(ageMonths)) {
        var bmi = calculateBMI(weight, height / 100); // Convert height to meters
        var bmiStatus = getBMIStatus(bmi, gender, ageMonths);
        document.getElementById("result").innerHTML = "Status IMT: " + bmiStatus;
    } else {
        document.getElementById("result").innerHTML = "Masukkan angka yang valid untuk berat, tinggi, dan usia.";
    }
}

// Event listener for calculation
document.getElementById("calculateBtn").addEventListener("click", calculate);

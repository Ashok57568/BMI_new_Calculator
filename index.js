
document.addEventListener("DOMContentLoaded", function () {
    // I got references to the input fields and elements required for calculations and results.
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const ageInput = document.getElementById("age");
    const genderSelect = document.getElementById("gender");
    const bmiResult = document.getElementById("bmi-result");
    const weightCondition = document.getElementById("weight-condition");
    const computeBtn = document.getElementById("btn");

    //  listened for a click on the compute button to calculate BMI when clicked.
    computeBtn.addEventListener("click", function () {
        // fetched the values the user entered for height, weight, age, and gender.
        const height = parseFloat(heightInput.value) / 100; // Converted height to meters.
        const weight = parseFloat(weightInput.value);
        const age = parseInt(ageInput.value);
        const gender = genderSelect.value;
        
        // I checked if the input values were valid and not negative or zero.
        if (isNaN(height) || isNaN(weight) || isNaN(age) || height <= 0 || weight <= 0 || age <= 0) {
            // If the values were invalid, I alerted the user to enter valid values.
            alert("Please enter valid height, weight, and age values.");
            return;
        }

        // I calculated the BMI using the provided formula.
        const bmi = calculateBMI(weight, height); // BMI formula: weight (kg) / (height (m) * height (m))
        // I displayed the calculated BMI rounded to 2 decimal places.
        bmiResult.value = bmi.toFixed(2);
        
        // Based on the calculated BMI, I determined the weight condition and displayed it.
        if (bmi < 18.5) {
            weightCondition.textContent = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            weightCondition.textContent = "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            weightCondition.textContent = "Overweight";
        } else {
            weightCondition.textContent = "Obese";
        }
    });

    // I defined a function to calculate BMI using weight and height.
    function calculateBMI(weight, height) {
        return weight / (height * height);
    }
});

// As the page content loaded, I found all the input fields and elements for the alternative height input method.
document.addEventListener("DOMContentLoaded", function () {
    // I got references to the input fields and elements required for calculations and results.
    const heightInputCm = document.getElementById("height-cm");
    const heightInputFt = document.getElementById("height-ft");
    const heightInputIn = document.getElementById("height-in");
    const weightInput = document.getElementById("weight");
    const ageInput = document.getElementById("age");
    const genderSelect = document.getElementById("gender");
    const bmiResult = document.getElementById("bmi-result");
    const weightCondition = document.getElementById("weight-condition");
    const computeBtn = document.getElementById("btn");

    // I listened for a click on the compute button to calculate BMI when clicked.
    computeBtn.addEventListener("click", function () {
        let height;
        if (heightInputCm.value) {
            height = parseFloat(heightInputCm.value) / 100; // Convert height to meters
        } else {
            const feet = parseFloat(heightInputFt.value);
            const inches = parseFloat(heightInputIn.value);
            height = (feet * 12 + inches) * 0.0254; // Convert feet and inches to meters
        }

        // I fetched the values the user entered for weight, age, and gender.
        const weight = parseFloat(weightInput.value);
        const age = parseInt(ageInput.value);
        const gender = genderSelect.value;
        
        // I checked if the input values were valid and not negative or zero.
        if (isNaN(height) || isNaN(weight) || isNaN(age) || height <= 0 || weight <= 0 || age <= 0) {
            // If the values were invalid, I alerted the user to enter valid values.
            alert("Please enter valid height, weight, and age values.");
            return;
        }

        // I calculated the BMI using the provided formula.
        const bmi = calculateBMI(weight, height);
        // I displayed the calculated BMI rounded to 2 decimal places.
        bmiResult.value = bmi.toFixed(2);
        
        // Based on the calculated BMI, I determined the weight condition and displayed it.
        if (bmi < 18.5) {
            weightCondition.textContent = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            weightCondition.textContent = "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            weightCondition.textContent = "Overweight";
        } else {
            weightCondition.textContent = "Obese";
        }
    });

    // I defined a function to calculate BMI using weight and height.
    function calculateBMI(weight, height) {
        return weight / (height * height);
    }
});

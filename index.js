document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = "https://my-json-server.typicode.com/ZippyKitche/Nutrifit/mealPlans";
    const apiKey = '102223af87msh10030bc9d15aef8p12206djsn7543a3387986';

    // .................................// Calculate BMI............................
    document.getElementById('calculate').addEventListener('click', calculateAndFetchCategory);

    async function calculateAndFetchCategory() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            document.getElementById('bmi-result').innerText = "Please enter valid weight and height.";
            return;
        }
        const heightMeters = height / 100;
        const bmi = (weight / (heightMeters * heightMeters)).toFixed(2);
        console.log("Weight:", weight, "Height (m):", heightMeters, "BMI:", bmi);

        document.getElementById('bmi-result').innerText = `Your BMI is: ${bmi}`;

        // Fetch and display the weight category
        const category = await fetchWeightCategory(bmi);
        document.getElementById('bmi-category').innerText = `Category: ${category}`;

        //...store globally.....
        calculatedWeight = weight;
        calculatedHeight = height; 
    }

    async function fetchWeightCategory(bmi) {
        const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category?bmi=${bmi}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const result = await response.json();
            return result.weightCategory;
        } catch (error) {
            console.error("Error fetching weight category:", error);
            return "Error fetching category";
        }
    }

    //.................. Nutrition info...................
    document.querySelectorAll('.bmi-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const category = icon.querySelector('p').innerText;
            showNutritionForm(category);
        });
    });

    function showNutritionForm(category) {
        document.getElementById('nutrition-form').style.display = 'block';
        document.getElementById('nutrition-category').innerText = `Category: ${category}`;
    }

    
let calculatedWeight;
let calculatedHeight;

document.getElementById('get-nutrition').addEventListener('click', async function() {
    const weight = calculatedWeight;
    const height = calculatedHeight;
    const weightUnit = 'kilos';
    const heightUnit = 'cm';
    const measurementUnits = 'met';

    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const activityLevel = document.getElementById('activity-level').value;

    if (!weight || !height) {
        alert("Please provide weight and height.");
        return;
    }

    const apiUrl = `https://nutrition-calculator.p.rapidapi.com/api/nutrition-info?measurement_units=${measurementUnits}&sex=${sex}&age_value=${age}&age_type=yrs&activity_level=${encodeURIComponent(activityLevel)}&kilos=${weight}&cm=${height}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'nutrition-calculator.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); 

        console.log("Complete API Response: ", data);
        
        const estimatedCalories = data.BMI_EER['Estimated Daily Caloric Needs'];

        document.getElementById('estimated-calories').innerText = estimatedCalories 
        ? `${estimatedCalories} kcal/day`
        : "Calories information not found.";

       const macronutrients = data.macronutrients_table['macronutrients-table'];
        const nutritionInfoBody = document.getElementById('nutrition-info-body');
        nutritionInfoBody.innerHTML = ''; 

        if (Array.isArray(macronutrients) && macronutrients.length > 0) {
            macronutrients.forEach(macro => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${macro[0]}</td><td>${macro[1]}</td>`;
                nutritionInfoBody.appendChild(row);
            });
        } else {
            nutritionInfoBody.innerHTML = `<tr><td colspan="2">Macronutrients information not found.</td></tr>`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('nutrition-info').innerText = `Error: ${error.message}`;
    }
});

});


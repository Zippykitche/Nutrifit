const baseUrl = "https://my-json-server.typicode.com/ZippyKitche/Nutrifit/mealPlans"
 //calculate BMI = Weight/height*height
 document.getElementById('calculate').addEventListener('click', calculateBMI);

async function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmi-result').innerText = "Please enter valid weight and height.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi-result').innerText = `Your BMI is: ${bmi}`;

    let category = '';
    if (bmi < 18.5) {
        category = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'overweight';
    } else {
        category = 'obese';
    }

    await fetchMealPlans(category);
}

async function fetchMealPlans(category) {
    const response = await fetch(`${baseUrl}=${category}`);
     
    if (!response.ok) {
        document.getElementById('meal-plans').innerText = "Failed to fetch meal plans.";
        return;
    }
    const plans = await response.json();
    
    const mealPlansDiv = document.getElementById('meal-plans');
    mealPlansDiv.innerHTML = `<h2>Meal Plans for ${category}</h2>`;
    
    plans.forEach(plan => {
        const meals = plan.meals.join(', ');
        mealPlansDiv.innerHTML += `<p>${meals}</p>`;
    });
}

Nutrition for Every BMI

Project Overview

"Nutrition for Every BMI" is a Single Page Application (SPA) that helps users calculate their Body Mass Index (BMI) and receive tailored nutrition advice based on their BMI category. The app provides specific meal plans for individuals who are underweight, overweight, obese, or within a normal BMI range.

Features

1. BMI Calculator: Users can input their weight and height to calculate their BMI.
2. Tailored Meal Plans: The app fetches and displays nutrition plans based on the BMI category (e.g., underweight, overweight, obese, or normal).
3. Interactivity: Users can toggle between different meal plans, view more details, and interact with the BMI calculator.

Core Technologies

- Frontend: HTML, CSS (Bootstrap for styling), JavaScript (for interactivity and fetching data).
- Backend: JSON Server (for simulating an API).

Installation and Setup

Follow these steps to set up and run the app locally:

1. Clone the repository:

git clone https://github.com/Zippykitche/Nutrifit.git
cd nutifit

2. Install Dependencies: You need json-server to run the backend. If you haven't installed it yet, run:

npm install -g json-server

3. Run JSON Server: To start the server, run:

json-server --watch db.json
Open the app: Use live-server or open index.html directly in your browser.

Usage

On the homepage, enter your weight (in kg) and height (in meters) into the BMI calculator form.
Once the BMI is calculated, a relevant meal plan will be shown based on your BMI category.
You can explore various meal plans designed for different BMI categories.

API Data

The app uses a simulated API (json-server) with the following structure:

{
  "nutritionPlans": [
    {
      "id": 1,
      "category": "Normal",
      "plan": "A balanced diet with equal portions of macronutrients."
    },
    {
      "id": 2,
      "category": "Underweight",
      "plan": "Increase protein and calorie intake, add nutrient-dense snacks."
    },
    {
      "id": 3,
      "category": "Overweight",
      "plan": "Focus on fiber-rich foods, reduce fats and simple sugars."
    },
    {
      "id": 4,
      "category": "Obese",
      "plan": "Adopt a low-calorie diet, rich in vegetables and lean proteins."
    }
  ]
}

Event Listeners and Interactivity

The app includes at least three types of distinct event listeners:

1. Form submission to calculate BMI.
2. Click events on meal plans to show details.
3. Toggling between different views or filters for meal plans.

Known Issues

Data persistence: Currently, meal plans added by users are not persistent and will reset upon page reload.
Responsiveness: Some UI elements may require further styling for smaller screen sizes.

Stretch Goals
Data Persistence: Implement the ability to save user data and maintain state across page reloads.
Dark Mode: Add a toggle for dark/light mode using another event listener.
API Integration: Replace the json-server with a real-world API for fetching nutrition data.

Contributing
Fork this repository.
Create a feature branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Create a pull request.
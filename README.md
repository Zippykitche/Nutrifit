Nutrition for Every BMI

Project Overview

"Nutrition for Every BMI" is a Single Page Application (SPA) that helps users calculate their Body Mass Index (BMI) and receive tailored nutrition advice based on their BMI category. The app provides specific calorie intake for individuals who are underweight, overweight, obese, or within a normal BMI range.

Features

1. BMI Calculator: Users can input their weight and height to calculate their BMI.
2. Recommended calorie intake according to BMI category


Core Technologies

- Frontend: HTML, CSS (Bootstrap for styling), JavaScript (for interactivity and fetching data).
- Backend: JSON Server (for simulating an API).
- API
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
You can explore various calorie intake designed for different BMI categories.

Event Listeners and Interactivity

The app includes at least three types of distinct event listeners:

1. Form submission to calculate BMI.
2. Click events on meal plans to show details.
3. Toggling between different views or filters for meal plans.

Known Issues

Responsiveness: Some UI elements may require further styling for smaller screen sizes.

Stretch Goals
Data Persistence: Implement the ability to save user data and maintain state across page reloads.
Dark Mode: Add a toggle for dark/light mode using another event listener.
create meal plans

Contributing
Fork this repository.
Create a feature branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Create a pull request.
function getWeather() {
    const city = document.getElementById('city').value;
    const fakeConditions = ['Sunny', 'Rainy', 'Thunderstorm', 'Clear'];
    const randomCondition = fakeConditions[Math.floor(Math.random() * fakeConditions.length)];
  
    if (city.trim()) {
      document.getElementById('result').textContent = 
        `${city}: 25°C, Clear Sky | Random: ${randomCondition}`;
    } else {
      document.getElementById('result').textContent = 'City not found.';
    }
  }
  
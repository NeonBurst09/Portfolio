function showWeather() {
  const conditions = ["Sunny", "Rainy", "Thunderstorm", "Clear"];
  const random = conditions[Math.floor(Math.random() * conditions.length)];
  document.getElementById("weatherOutput").textContent = `Current weather: ${random}`;
}

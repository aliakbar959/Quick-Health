function checkSymptom() {
  const input = document.getElementById('symptomInput').value.toLowerCase();
  const result = document.getElementById('symptomResult');

  fetch(`http://127.0.0.1:5000/symptom?q=${encodeURIComponent(input)}`)
    .then(response => response.json())
    .then(data => {
      result.textContent = data.message;
    })
    .catch(error => {
      result.textContent = 'Error connecting to the server.';
    });
}

function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('bmiResult');

  if (!height || !weight) {
    result.textContent = 'Please enter valid height and weight values.';
    return;
  }

  const bmi = weight / (height * height);
  let message = `Your BMI is ${bmi.toFixed(1)}. `;

  if (bmi < 18.5) message += 'Underweight';
  else if (bmi < 24.9) message += 'Normal weight';
  else if (bmi < 29.9) message += 'Overweight';
  else message += 'Obese';

  result.textContent = message;
}

// Simulated random health news
window.onload = () => {
  const newsList = document.getElementById('newsList');

  fetch('http://127.0.0.1:5000/health-news')
    .then(res => res.json())
    .then(news => {
      newsList.innerHTML = '';
      news.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        newsList.appendChild(li);
      });
    })
    .catch(err => {
      newsList.innerHTML = '<li>Failed to load news.</li>';
    });
};
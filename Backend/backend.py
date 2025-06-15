# backend.py
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Simulated symptom suggestions
diagnosis_data = {
    "headache": "May be due to stress, dehydration, or sleep issues. Rest and drink water.",
    "fever": "Monitor temperature. Drink fluids. Consult doctor if it persists.",
    "cough": "Could be a common cold or allergy. Try warm fluids and rest.",
    "nausea": "Rest and stay hydrated. Avoid solid food temporarily.",
    "dizziness": "Could be due to dehydration or fatigue. Sit down and rest."
}

# Simulated health news
import random
news_samples = [
    "New study shows benefits of 10-minute walks after meals.",
    "Sleep found to be as important as diet and exercise.",
    "WHO releases new hydration guidelines.",
    "Researchers find links between screen time and eye strain.",
    "Daily stretching shown to improve mental health.",
    "New nutrition pyramid suggests reducing processed sugar."
]

@app.route("/symptom", methods=["GET"])
def check_symptom():
    symptom = request.args.get("q", "").lower()
    response = diagnosis_data.get(symptom, "Symptom not recognized. Please consult a healthcare provider.")
    return jsonify({"message": response})

@app.route("/health-news", methods=["GET"])
def get_news():
    news = random.sample(news_samples, 3)
    return jsonify(news)

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import json

app = Flask(__name__)

# Enable CORS for your React frontend (localhost:3000)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

SCRAPED_DATA_DIR = "python-backend/outputs"  # Path where your JSON files are stored

@app.route('/api/scraped-data/<filename>', methods=['GET'])
def get_scraped_data(filename):
    # Construct the full file path dynamically using the filename parameter
    file_path = os.path.join(SCRAPED_DATA_DIR, f"{filename}.json")
    
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            data = json.load(file)
        return jsonify(data)
    else:
        return jsonify({"error": f"File {filename}.json not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)

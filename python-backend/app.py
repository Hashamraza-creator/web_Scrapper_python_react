import os
from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "https://web-scrapper-python-react.vercel.app"}})


SCRAPED_DATA_DIR = os.path.join(os.path.dirname(__file__), 'outputs')

@app.route('/api/scraped-data/<filename>', methods=['GET'])
def get_scraped_data(filename):
    file_path = os.path.join(SCRAPED_DATA_DIR, f"{filename}.json")
    print(f"Looking for file at: {file_path}")

    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            data = json.load(file)
        return jsonify(data)
    else:
        return jsonify({"error": f"File {filename}.json not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)

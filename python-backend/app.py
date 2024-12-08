import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)

# Allow requests from both localhost and your Vercel domain
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:3000",  # React frontend (development)
            "https://web-scrapper-python-react.vercel.app"  # Vercel (production)
        ]
    }
})

# Directory containing JSON files
SCRAPED_DATA_DIR = os.path.join(os.path.dirname(__file__), 'outputs')

@app.route('/api/scraped-data/<filename>', methods=['GET'])
def get_scraped_data(filename):
    try:
        # Append .json if not present
        if not filename.endswith('.json'):
            filename += '.json'
        # Return the file from the directory
        return send_from_directory(SCRAPED_DATA_DIR, filename)
    except FileNotFoundError:
        return jsonify({"error": f"File {filename} not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)

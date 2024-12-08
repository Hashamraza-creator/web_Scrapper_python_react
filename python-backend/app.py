import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)

# Allow requests from your Vercel frontend domain
CORS(app, resources={r"/api/*": {"origins": "https://web-scrapper-python-react.vercel.app"}})

# Directory containing scraped JSON files
SCRAPED_DATA_DIR = os.path.join(os.path.dirname(__file__), 'outputs')

@app.route('/api/scraped-data/<filename>', methods=['GET'])
def get_scraped_data(filename):
    try:
        # Ensure filename ends with .json
        if not filename.endswith('.json'):
            filename += '.json'

        # Send the JSON file from the output directory
        return send_from_directory(SCRAPED_DATA_DIR, filename)
    except FileNotFoundError:
        return jsonify({"error": f"File {filename} not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # Run the backend server on localhost
    app.run(debug=True, port=5000)

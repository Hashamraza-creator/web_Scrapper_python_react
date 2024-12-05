import json

def read_queries(file_path):
    """Reads search queries from a JSON file."""
    try:
        with open(file_path, 'r') as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error reading queries file: {e}")
        return []

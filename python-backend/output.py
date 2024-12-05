import json

def save_to_json(data, output_file):
    """Saves data to a JSON file."""
    with open(output_file, 'w') as file:
        json.dump(data, file, indent=4)
    print(f"Data saved to {output_file}")

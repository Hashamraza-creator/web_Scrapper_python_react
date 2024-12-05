from datetime import datetime

def generate_timestamp():
    """Generates a timestamp for the current date."""
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

from queries import read_queries
from scraper import scrape_query
from output import save_to_json

def main():
    input_file = "user_queries.json"
    queries = read_queries(input_file)
    if not queries:
        return

    for query in queries:
        print(f"Starting scrape for '{query}'...")
        products = scrape_query(query)
        output_file = f"{query.replace(' ', '_')}.json"
        save_to_json(products, output_file)

if __name__ == "__main__":
    main()

import requests
from bs4 import BeautifulSoup
from datetime import datetime
from data_model import create_product
from utils import generate_timestamp
import time
import random

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9"
}

BASE_URL = "https://www.amazon.com/s?k="

def fetch_page(query, page_number):
    """Fetches an Amazon search results page."""
    url = f"{BASE_URL}{query.replace(' ', '+')}&page={page_number}"
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        response.raise_for_status()
        return BeautifulSoup(response.text, 'html.parser')
    except requests.RequestException as e:
        print(f"Error fetching page {page_number} for '{query}': {e}")
        return None

def parse_products(soup, scrape_date):
    """Parses product details from the search results page."""
    products = []
    results = soup.find_all("div", {"data-component-type": "s-search-result"})
    for product in results:
        try:
            title = product.find("span", {"class": "a-size-medium"}).text.strip()
            reviews = product.find("span", {"class": "a-size-base"}).text.strip()
            price = product.find("span", {"class": "a-offscreen"}).text.strip()
            image = product.find("img", {"class": "s-image"})["src"]
            products.append(create_product(title, reviews, price, image, scrape_date))
        except AttributeError:
            continue
    return products

def scrape_query(query, max_pages=20):
    """Scrapes multiple pages for a search query."""
    all_products = []
    scrape_date = generate_timestamp()
    for page in range(1, max_pages + 1):
        print(f"Scraping page {page} for query '{query}'...")
        soup = fetch_page(query, page)
        if not soup:
            continue
        products = parse_products(soup, scrape_date)
        all_products.extend(products)
        time.sleep(random.uniform(1, 3))  
    return all_products

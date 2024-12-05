def create_product(title, reviews, price, image_url, scrape_date):
    """Creates a product dictionary."""
    return {
        "title": title,
        "reviews": reviews,
        "price": price,
        "image_url": image_url,
        "scrape_date": scrape_date
    }

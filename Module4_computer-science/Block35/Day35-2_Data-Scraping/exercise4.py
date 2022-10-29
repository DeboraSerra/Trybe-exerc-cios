import requests
from parsel import Selector

url = 'http://books.toscrape.com/catalogue/the-grand-design_405/index.html'

data = requests.get(url)
selector = Selector(text=data.text)

title = selector.css('div.product_main h1::text').get()

price = selector.css('p.price_color::text').re_first(r"\d+\.\d{2}")

description = selector.css('div#product_description ~ p::text').get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

img = selector.css('div.item.active img::attr(src)').get()

print(f'{title}, {price}, {description}, {img}')

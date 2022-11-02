import requests
from bs4 import BeautifulSoup

def scrape(url):
    page = requests.get(url)
    content = BeautifulSoup(page.text, 'html.parser')
    paragraphs = content.find_all('p')
    print(paragraphs)

url = 'https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/'
scrape(url)

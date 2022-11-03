import requests

url = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'

data = requests.get(url, headers={ 'User-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' })

assert "bot detected" not in data.text

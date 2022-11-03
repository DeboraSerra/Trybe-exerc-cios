import requests
# from parsel import Selector

url = 'https://httpbin.org/encoding/utf8'

data = requests.get(url)
info = data.text
headers = data.headers
status = data.status_code

print(status)
print(headers)
print(info)

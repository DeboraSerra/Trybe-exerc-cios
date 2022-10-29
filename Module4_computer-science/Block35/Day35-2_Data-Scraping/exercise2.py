from ast import parse
import requests

url = 'https://api.github.com/users'

data = requests.get(url)
result = data.json()

for user in result:
    print({ 'username': user['login'], 'url': user['url'] })

import requests
url = 'http://localhost:3001/notes'
print(requests.get(url).json())

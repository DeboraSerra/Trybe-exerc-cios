from http import client
from unicodedata import category
from pymongo import MongoClient


def find_books(cat):
    with MongoClient('mongodb://root:root@localhost:27017/') as client:
        db = client.block35
        books_found = db.books.find({ 'categories': cat }, { '_id': 0, 'title': 1 })
        books = [book for book in books_found]
        print(books)

category = input('Choose a category: ')
print(category)
find_books(category)
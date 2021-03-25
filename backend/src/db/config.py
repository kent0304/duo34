import os

SQLALCHEMY_DATABASE_URI = 'sqlite:///duo.db'
SECRET_KEY = os.urandom(24)
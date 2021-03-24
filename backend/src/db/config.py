import os

SQLALCHEMY_DATABASE_URI = 'sqlite:///flask.db'
SECRET_KEY = os.urandom(24)
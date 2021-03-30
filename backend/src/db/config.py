import os

SQLALCHEMY_DATABASE_URI = 'sqlite:///{db_path}/{db_name}'.format(**{
  'db_path': os.path.dirname(os.path.abspath(__file__)),
  'db_name': 'duo34.db'
})
SECRET_KEY = os.urandom(24)

SQLALCHEMY_TRACK_MODIFICATIONS = True
SQLALCHEMY_ECHO = True
SQLALCHEMY_NATIVE_UNICODE = 'utf-8'
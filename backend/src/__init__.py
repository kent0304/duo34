from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('src.db.config')

db = SQLAlchemy(app)

import src.hello

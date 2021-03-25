from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('src.db.config')

db = SQLAlchemy(app)

import src.controllers.hello
from src.models.Section import Section
from src.models.Question import Question
from src.models.Answer import Answer
from src.models.Conduction import Conduction

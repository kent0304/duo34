from src import app, db
from flask import jsonify, request
from src.models.Question import Question
from src.models.Section import Section
from src.models.Conduction import Conduction
import datetime as dt
import pytz

@app.route('/conduction', methods=['POST'])
def conduct_test():
  section_id = request.json.get('section_id')
  # conductionをクリエイト
  conduction = Conduction(0)
  db.session.add(conduction)
  db.session.commit()

  return jsonify({ "conduction": conduction.to_dict() }), 201


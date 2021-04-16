from src import app, db
from flask import jsonify, request
from src.models.Question import Question
from src.models.Section import Section
from src.models.Conduction import Conduction
from src.models.Answer import Answer
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

@app.route('/conductions/<int:id>', methods=['GET'])
def get_conduction(id=None):
  conduction = Conduction.query.filter_by(id=id).first()
  return jsonify({ 'conduction': conduction.to_dict() }), 200

@app.route('/conduction/answer/<int:id>', methods=['POST'])
def post_answer(id=None):
  question_id = request.json.get('question_id')
  answer_text = request.json.get('answer_text')
  is_solve = request.json.get('is_solve')

  conduction = Conduction.query.filter_by(id=id).first()
  if is_solve:
    conduction.score = conduction.score + 1

  answer = Answer(conduction.id, question_id, answer_text, is_solve)

  db.session.add(answer)
  db.session.commit()

  return jsonify({ "conduction": conduction.to_dict(), 'answer': answer.to_dict() }), 201




from src import app, db
from flask import jsonify, request
from src.models.Question import Question
from src.models.Section import Section
import datetime as dt
import pytz

@app.route('/questions', methods=['GET'])
def fetch_questions():
  questions = Question.query.all()
  return jsonify({'questions': [question.to_dict() for question in questions]}), 200

@app.route('/questions/<int:id>', methods=['GET'])
def get_question(id=None):
  question = Question.query.filter_by(id=id).first()
  return jsonify(question.to_dict()), 200

@app.route('/question', methods=['POST'])
def post_question():
  question_number = request.json.get('question_number')
  section_id = request.json.get('section_id')
  english_text = request.json.get('english_text')
  japanese_text = request.json.get('japanese_text')

  question = Question(question_number, section_id, english_text, japanese_text)
  db.session.add(question)
  db.session.commit()

  response = jsonify(question.to_dict())
  return response, 201

@app.route('/questions/<int:id>', methods=['PUT'])
def put_question(id):
  question = Question.query.filter_by(id=id).first()
  if not question:
    abort(404, {'code': 'Not found', 'message': 'question not found'})
  
  question.question_number = request.json.get('question_number')
  question.section_id = request.json.get('section_id')
  question.english_text = request.json.get('english_text')
  question.japanese_text = request.json.get('japanese_text')
  question.updated_at = dt.datetime.now(pytz.timzone('Asia/Tokyo')

  db.session.commit()

  return jsonify(question.to_dict())
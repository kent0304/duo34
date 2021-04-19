from src import app, db
from flask import jsonify, request
from src.models.Answer import Answer

@app.route('/answers/conduction/<int:id>', methods=['GET'])
def get_answers_by_conduction_id(id=None):
  answers = Answer.query.filter_by(conduction_id=id)
  return jsonify({ 'answers': [answer.to_dict() for answer in answers] }), 200


import datetime as dt
from src import db
import pytz

class Answer(db.Model):
  __tablename__ = 'answers'
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  question_id = db.Column(db.Integer, nullable=False)
  conduction_id = db.Column(db.Integer, nullable=False)
  answer_text = db.Column(db.String(255), nullable=True)
  is_solve = db.Column(db.Boolean, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.now(pytz.timezone('Asia/Tokyo')))
  updated_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.now(pytz.timezone('Asia/Tokyo')))

  def __init__(self, conduction_id, question_id, answer_text, is_solve):
    self.conduction_id = conduction_id
    self.question_id = question_id
    self.answer_text = answer_text
    self.is_solve = is_solve

  def to_dict(self):
    return {
      'id': self.id,
      'question_id': self.question_id,
      'conduction_id': self.conduction_id,
      'answer_text': self.answer_text,
      'is_solve': self.is_solve,
      'created_at': self.created_at,
      'updated_at': self.updated_at,
    }

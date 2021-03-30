import datetime as dt
from src import db

class Question(db.Model):
  __tablename__ = 'questions'
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  question_number = db.Column(db.Integer, nullable=False)
  section_id = db.Column(db.Integer, nullable=False)
  english_text = db.Column(db.String(255), nullable=False)
  japanese_text = db.Column(db.String(255), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)

  def __init__(self, section_number):
    self.section_number = section_number

  def __repr__(self):
    return '<Question(id={self.id} question_number={self.question_number})>'.format(self=self)
import datetime as dt
from src import db

class Question(db.Model):
  __tablename__ = 'questions'
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  question_number = db.Column(db.Integer, nullable=False)
  section_number = db.Column(db.Integer, nullable=False)
  created_date = db.Column(db.DateTime, nullable=False, default=utcow)

  def __init__(self, section_number):
    self.section_number = section_number

  def __repr__(self):
    return '<Question(id={self.id} question_number={self.question_number})>'.format(self=self)
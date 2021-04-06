import datetime as dt
from src import db
import pytz

class Question(db.Model):
  __tablename__ = 'questions'
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  question_number = db.Column(db.Integer, nullable=False)
  section_id = db.Column(db.Integer, nullable=False)
  english_text = db.Column(db.String(255), nullable=False)
  japanese_text = db.Column(db.String(255), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.now(pytz.timzone('Asia/Tokyo')))
  updated_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.now(pytz.timzone('Asia/Tokyo')))

  def __init__(self, question_number, section_id, english_text, japanese_text):
    self.question_number = question_number
    self.section_id = section_id
    self.english_text = english_text
    self.japanese_text = japanese_text

  def to_dict(self):
    return {
      'id': self.id,
      'question_number': self.question_number,
      'section_id': self.section_id,
      'english_text': self.english_text,
      'japanese_text': self.japanese_text,
      'created_at': self.created_at
      'updated_at' : self.updated_at
    }

  def __repr__(self):
    return '<Question(id={self.id} question_number={self.question_number} section_id={self.section_id} english_text={self.english_text} japanese_text={self.japanese_text} created_at={self.created_at} updated_at={self.updated_at})>'.format(self=self)
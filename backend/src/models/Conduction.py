import datetime as dt
from src import db
import pytz

class Conduction(db.Model):
  __tablename__ = 'conductions'
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  score = db.Column(db.Integer, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.now(pytz.timezone('Asia/Tokyo')))
  updated_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.now(pytz.timezone('Asia/Tokyo')))

  def __init__(self, score):
    self.score = score

  def to_dict(self):
    return {
      'id': self.id,
      'score': self.score,
      'created_at': self.created_at,
      'updated_at' : self.updated_at
    }

  def __repr__(self):
    return '<Conduction(id={self.id} score={self.score} created_at={self.created_at} updated_at={self.updated_at})>'.format(self=self)

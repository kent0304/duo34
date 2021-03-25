import datetime as dt
from src import db

class Conduction(db.Model):
  __tablename__ = 'conductions'
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  score = db.Column(db.Integer, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)

  def __init__(self, score):
    self.score = score

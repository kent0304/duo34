import datetime as dt
from src import db
import pytz

class Section(db.Model):
  __tablename__ = 'sections'
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.String, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.now(pytz.timezone('Asia/Tokyo')))
  updated_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.now(pytz.timezone('Asia/Tokyo')))

  def __init__(self, name):
    self.name = name

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'created_at': self.created_at
    }

  def __repr__(self):
    return '<Section(id={self.id} name={self.name}) created_at={self.created_at}>'.format(self=self)
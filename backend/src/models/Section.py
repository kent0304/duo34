import datetime as dt
from src import db

class Section(db.Model):
  __tablename__ = 'sections'
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  section_number = db.Column(db.Integer, nullable=False)
  created_date = db.Column(db.DateTime, nullable=False, default=utcow)

  def __init__(self, section_number):
    self.section_number = section_number

  def __repr__(self):
    return '<Section(id={self.id} section_number={self.section_number})>'.format(self=self)
from src import db

from .Answer import Answer
from .Conduction import Conduction
from .Question import Question
from .Section import Section

def init():
  db.create_all()
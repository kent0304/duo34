from src import app
from flask import jsonify

@app.route("/")
def index():
  return jsonify({"hello": "hello"})
from src import app, db
from flask import jsonify, request
from src.models.Section import Section

@app.route('/sections', methods=['GET'])
def get_sections_list():
  sections = Section.query.all()
  return jsonify({"sections": [section.to_dict() for section in sections]})

@app.route('/section', methods=['POST'])
def post_section():
  section_name = request.json.get('name')

  section = Section(section_name)
  db.session.add(section)
  db.session.commit()

  response = jsonify(section.to_dict())
  return response, 201

from src import app, db
from flask import jsonify, request
from src.models.Section import Section

@app.route('/sections', methods=['GET'])
def get_sections_list():
  sections = Section.query.all()
  return jsonify({"sections": [section.to_dict() for section in sections]}), 200

@app.route('/sections/<int:id>', methods=['GET'])
def get_section(id=None):
  section = Section.query.filter_by(id=id).first()
  return jsonify(section.to_dict()), 200

@app.route('/section', methods=['POST'])
def post_section():
  section_name = request.json.get('name')

  section = Section(section_name)
  db.session.add(section)
  db.session.commit()

  response = jsonify(section.to_dict())
  return response, 201

@app.route('/sections/<int:id>', methods=['PUT'])
def put_section(id):
  section = Section.query.filter_by(id=id).first()
  if not section:
    abort(404, {'code': 'Not found', 'message': 'section not found'})
  
  section.name = request.json.get('name')
  db.session.commit()

  return jsonify(section.to_dict())

from src import app, db
from flask_migrate import Migrate
from flask_cors import CORS

app.config['JSON_AS_ASCII'] = False
db.init_app(app)
Migrate(app, db)
CORS(app)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.headers.add('Access-Control-Allaw-Headers', 'Content-Type, Authorization')
  response.headers.add('Access-Control-Allaw-Methods', 'GET, PUT, POST, DELETE')
  return response

def main():
  app.run(port=5000, debug=True)

if __name__ == '__main__':
  main()
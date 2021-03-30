from src import app, db
from flask_migrate import Migrate

db.init_app(app)
Migrate(app, db)

def main():
  app.run(port=5000, debug=True)

if __name__ == '__main__':
  main()
#!/bin/sh
echo 'remove db'
rm -rf ./migrations
rm ./src/db/duo34.db

echo 'create db'
flask db init
flask db migrate
flask db upgrade
python ./src/db/seed.py

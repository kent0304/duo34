#!/bin/sh
echo 'create db'
flask db init
flask db migrate
flask db upgrade
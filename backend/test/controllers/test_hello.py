import os, sys
import pytest
import json

sys.path.append(os.getcwd())
from src import app

def test_hello():
    app.config['TESTING'] = True
    client = app.test_client()
    result = client.get('/')
    assert {"hello": "hello"} == json.loads(result.data)
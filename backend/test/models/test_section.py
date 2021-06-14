import sys
import pytest

sys.path.append('../')
from src import app
from src import Section

section_name = 'section1'
section = Section(section_name)

def test_section_create():
    assert section_name == section.name

def test_section_miscreate():
    assert 'section2' != section.name

def test_section_to_dict():
    section_dict = section.to_dict()
    assert section.name == section_dict['name']
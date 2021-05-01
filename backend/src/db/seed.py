import os, sys
sys.path.append(os.getcwd())
from src import (
    db,
    Section,
)

def create_sections():
    number_of_sections = 50
    for section_number in range(number_of_sections):
        section_name = "section" + str(section_number + 1)
        section = Section(section_name)
        db.session.add(section)
    db.session.commit()

def create_questions():
    '''
        Todo: csvかなんかでデータを自動追加
    '''
    pass

def main():
    create_sections()
    create_questions()

if __name__ == '__main__':
    main()
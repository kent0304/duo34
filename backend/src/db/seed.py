import os, sys
sys.path.append(os.getcwd())
from src import (
    db,
    Section,
    Question
)

def create_sections():
    number_of_sections = 50
    for section_number in range(number_of_sections):
        section_name = "section" + str(section_number + 1)
        section = Section(section_name)
        db.session.add(section)
    db.session.commit()

def create_questions():
    questions = [
        {
            'question_number': 1,
            'section_id': 1,
            'english_text': 'We must respect the will of the individual.',
            'japanese_text': '個人の意思は尊重しなけらばならない。'
        },
        {
            'question_number': 2,
            'section_id': 1,
            'english_text': 'Take it easy. I can assure you that everything will turn out fine.',
            'japanese_text': '気楽にいけよ。大丈夫、全てうまくいくさ。'
        },
        {
            'question_number': 3,
            'section_id': 1,
            'english_text': 'Let go of your nagative outlook on life. Always maintain a positive attitude.',
            'japanese_text': '悲観的な人生観を捨てて、前向きな態度を常に持ち続けよう。'
        },
        {
            'question_number': 4,
            'section_id': 1,
            'english_text': 'You should be fair to everyone regardless of national origin, gender, or creed.',
            'japanese_text': '生まれた国、性別、信条に関係なく、誰に対しても公平でなくてはならない。'
        },
        {
            'question_number': 5,
            'section_id': 1,
            'english_text': 'Equality is guaranteed by the Constitution.',
            'japanese_text': '平等は憲法で守られている。'
        },
        {
            'question_number': 6,
            'section_id': 1,
            'english_text': 'He leaned against the pillar and gazed at the Statue of Liberty',
            'japanese_text': '彼は柱に寄りかかって、自由の女神像をじっと見つめた。'
        },
        {
            'question_number': 7,
            'section_id': 1,
            'english_text': 'A woman passed by me giving off a subtle scent of perfume. It reminded me of my ex-girlfriend.',
            'japanese_text': '香水のほのかな香りを漂わせながら、一人の女性が僕雨の前を通り過ぎた。前の彼女のことを思い出してしまった。'
        },
        {
            'question_number': 8,
            'section_id': 1,
            'english_text': '\"Natto\" smells awful but taste terrific',
            'japanese_text': '納豆は匂いはひどいけれど味は最高'
        },
        {
            'question_number': 9,
            'section_id': 1,
            'english_text': '\"I\'m soaked with sweet.\" \"Stand back! You stink. Take a shower\"',
            'japanese_text': '「汗でびしょ濡れだよ。」「来ないで！臭いわ。シャワーを浴びて。」'
        },
    ]
    for data in questions:
        question = Question(data['question_number'], data['section_id'], data['english_text'], data['japanese_text'])
        db.session.add(question)
    db.session.commit()


def main():
    create_sections()
    create_questions()

if __name__ == '__main__':
    main()
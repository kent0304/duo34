FROM python:3.7

WORKDIR /usr/src/duo34/backend

RUN apt-get upgrade && pip install --upgrade pip 

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

CMD ["/bin/sh"]

FROM python:3.7.10-alpine3.12

WORKDIR /usr/src/duo34/backend

RUN apk --no-cache add && pip install --upgrade pip

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

CMD ["/bin/sh"]

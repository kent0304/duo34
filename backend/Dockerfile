FROM python:3.7.10-alpine3.12

WORKDIR /usr/src/

RUN apk --no-cache add && pip install --upgrade pip

COPY . /usr/src/

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["/bin/sh"]
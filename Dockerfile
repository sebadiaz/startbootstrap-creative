FROM ubuntu
MAINTAINER Seb

RUN apt-get update
RUN apt-get install -y python-software-properties curl git
RUN apt-get -qq update
RUN apt-get install -y nodejs npm
RUN npm install -g expressjsmvc express nodemon bower

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/mongodb.list


RUN apt-get update
RUN apt-get install -y mongodb-10gen
RUN mkdir -p /data/db

EXPOSE 27017
EXPOSE 3000

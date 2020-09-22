FROM node:latest

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/node_docker/

WORKDIR $HOME/node_docker
EXPOSE 2020

RUN npm install --silent --progress=false

COPY . $HOME/node_docker


CMD ["npm", "start"]


